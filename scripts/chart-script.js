// Doughnut chart = Visitors Profile
var ctx = document.getElementById('myDoughnutChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['mail', 'femail'],
        datasets: [{
            data: [30, 70],
            backgroundColor: ['#6c5ce7', '#a29bfe'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Recommended Daily Diet',
            position: 'bottom',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                }
            }
        }
    }
});



// Vertical bar chart = Visitors Profile
var ctx = document.getElementById('myBarChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
          label: 'Life expectancy',
          data: [10, 18, 30, 18, 11, 19, 29, 20, 7, 32, 11, 19],
          backgroundColor: [
              'rgb(67, 94, 190)'
          ],
          borderColor: [
            'rgb(67, 94, 190)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      legend: {
          display: false
      },
      title: {
          display: true,
          text: 'Life Expectancy by Country',
          position: 'top',
          fontSize: 16,
          padding: 20
      },
      scales: {
          yAxes: [{
              ticks: {
                  min: 75
              }
          }]
      }
  }
});