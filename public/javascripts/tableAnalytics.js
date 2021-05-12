function printChart(raisedAmountCo, yearsCo) {
    const ctx = document.getElementById('chart').getContext('2d');
    window.myChartInfo = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: yearsCo,
            datasets: [{
                label: 'Funding Timeline',
                data: raisedAmountCo,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
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
}

printChart();

axios
    .get('http://localhost:3000/company/52cdef7c4bab8bd675297d8a/json')
    .then(response => {
        console.log("====data====", response.data);
        // const years = response.data.raisedAmount
        // const raisedAmount = response.data.data.raisedAmount
        // console.log("================years", years)
        // return printChart(raisedAmount, years)
    })
    .catch(err => console.log(err))