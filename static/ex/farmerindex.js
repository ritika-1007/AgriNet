

// Pie Chart
var xPieValues = ["Healthy Crop", "Damage Crop"];
var yPieValues = [73, 27];
var barPieColors = [
    "green",
    "#b91d47"
];



new Chart("myPieChart", {
    type: "pie",
    data: {
        labels: xPieValues,
        datasets: [{
            backgroundColor: barPieColors,
            data: yPieValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Crop Yield"
        }
    }
});


// Income Chart
var xIncomeValues = ["Nov", "Dec", "Jan", "Feb"];
var yIncomeValues = [10000, 8300, 4400, 2400, 1500];
var barIncomeColors = ["green", "green", "green", "green", "green"];

new Chart("myIncomeChart", {
    type: "bar",
    data: {
        labels: xIncomeValues,
        datasets: [{
            backgroundColor: barIncomeColors,
            data: yIncomeValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Farmer's Income "
        }
    }
});


// Crop Production
var xprodValues = ["Nov", "Dec", "Jan", "Feb"];
var yprodValues = [10, 8.12, 4.34, 2.96, 1.57];
var barprodColors = ["green", "green", "green", "green", "green"];

new Chart("myProductionChart", {
    type: "bar",
    data: {
        labels: xprodValues,
        datasets: [{
            backgroundColor: barprodColors,
            data: yprodValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Crop Produced in metric tonnes"
        }
    }
});