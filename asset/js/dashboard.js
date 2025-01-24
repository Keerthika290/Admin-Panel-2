const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',],
    datasets: [{
      label: 'sales',
      data: [200, 150, 100, 200, 100, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(235, 66, 54)',
        'rgb(131, 86, 255)',
        'rgb(16, 216, 243)'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
