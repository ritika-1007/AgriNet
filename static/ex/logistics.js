if(localStorage.getItem('admintoken')==="") {
	window.location.replace("/adminLogin") ;
}

var x = document.getElementsByClassName("logoutUser")[0] ;
x.addEventListener('click' , () => {
    localStorage.setItem("token" , "") ;
    localStorage.setItem("admintoken" , "") ;
    window.location.reload();
})

// Labour Usage statistics
var xLabourValues = ["Seeding", "Planting", "Manuring", "Irrigation", "Pest-control"];
var yLabourValues = [4700, 4500, 6300, 8400, 2400, 1500];
var barLabourColors = ["#3cbd5e", "#56d175", "#64ed88", "#6ef592", "#85f2a2"];

new Chart("myLabourChart", {
    type: "bar",
    data: {
        labels: xLabourValues,
        datasets: [{
            backgroundColor: barLabourColors,
            data: yLabourValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Logistics"
        }
    }
});

// Pie Chart
var xPieValues = ["Wages", "Material Cost"];
var yPieValues = [63, 37];
var barPieColors = [
    "#e83d23",
    "#e8b023"
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
            text: "Profit Relationship"
        }
    }
});
