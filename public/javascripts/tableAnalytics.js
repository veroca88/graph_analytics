function printChart(raisedAmount, years) {
    console.log("raised====================", raisedAmount)
    const labels = years
    const ctx = document.getElementById('myChart').getContext('2d')
    window.myLinearchart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [labels],
            datasets: [
                {
                    label: 'Raised Amount',
                    data: [raisedAmount],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }
            ],
        },
    })
}

printChart()

fetch(`http://localhost:3000/company/json`)
    .then(responseURL => {
        const raisedAmountGraph = responseURL.raisedAMount;
        const yearsGraph = responseURL.fundedYear;
        console.log("years", yearsGraph)
        printChart(raisedAmountGraph, yearsGraph);
    })
    .catch(err => {
        console.log('Error while getting the data: ', err);
    });



