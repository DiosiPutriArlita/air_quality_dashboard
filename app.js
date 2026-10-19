const airData = {
    jakarta: {
        aqi: 125,
        status: 'Tidak Sehat (Kelompok Rentan)',
        color: '#f59e0b',
        gradientStop: 'rgba(245, 158, 11, 0.25)',
        pollutant: 'PM2.5',
        temp: '31°C',
        hourly: [90, 105, 110, 125, 130, 125]
    },
    bandung: {
        aqi: 45,
        status: 'Baik',
        color: '#10b981',
        gradientStop: 'rgba(16, 185, 129, 0.25)',
        pollutant: 'O3',
        temp: '24°C',
        hourly: [35, 40, 42, 45, 48, 45]
    },
    surabaya: {
        aqi: 85,
        status: 'Sedang',
        color: '#fbbf24',
        gradientStop: 'rgba(251, 191, 36, 0.25)',
        pollutant: 'PM10',
        temp: '33°C',
        hourly: [70, 75, 80, 85, 90, 85]
    }
};

let aqiChart;

function initChart() {
    const ctx = document.getElementById('aqiChart').getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(245, 158, 11, 0.35)');
    gradient.addColorStop(1, 'rgba(245, 158, 11, 0.0)');

    aqiChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
            datasets: [{
                label: 'Indeks AQI',
                data: airData.jakarta.hourly,
                borderColor: '#f59e0b',
                borderWidth: 3,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#f59e0b',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
                backgroundColor: gradient,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleColor: '#f8fafc',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 12 } }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.06)' },
                    ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 12 } },
                    beginAtZero: true
                }
            }
        }
    });
}

function updateDashboard() {
    const selected = document.getElementById('cityFilter').value;
    const data = airData[selected];

    document.getElementById('aqiValue').innerText = data.aqi;
    document.getElementById('aqiStatus').innerText = data.status;
    document.getElementById('aqiStatus').style.backgroundColor = data.color;
    document.getElementById('cardAqi').style.borderTopColor = data.color;
    document.getElementById('mainPollutant').innerText = data.pollutant;
    document.getElementById('temperature').innerText = data.temp;

    const ctx = document.getElementById('aqiChart').getContext('2d');
    const newGradient = ctx.createLinearGradient(0, 0, 0, 300);
    newGradient.addColorStop(0, data.gradientStop);
    newGradient.addColorStop(1, 'rgba(0, 0, 0, 0.0)');

    aqiChart.data.datasets[0].data = data.hourly;
    aqiChart.data.datasets[0].borderColor = data.color;
    aqiChart.data.datasets[0].pointBorderColor = data.color;
    aqiChart.data.datasets[0].backgroundColor = newGradient;
    aqiChart.update();
}

window.onload = function() {
    initChart();
    updateDashboard();
};
