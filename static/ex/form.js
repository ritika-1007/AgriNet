if(localStorage.getItem('token')==="") {
	window.location.replace("/") ;
}

var logout = document.getElementsByClassName("logoutUser")[0] ;
logout.addEventListener('click' , () => {
    console.log("user")
    localStorage.setItem("token" , "") ;
    localStorage.setItem("admintoken" , "") ;
    window.location.reload();
})





var submitbtn = document.getElementById("submit") ;
submitbtn.addEventListener('click' , async (event) => {
    event.preventDefault() ;

		var actname = document.getElementById("actname").value ;
		var startDate = document.getElementById("startDate").value ;
		var endDate = document.getElementById("endDate").value ;
		var actproof = document.getElementById("actproof").value ;
		var labourName  = document.getElementById("labourname").value ;
		var workduration = document.getElementById("workduration").value ;
		var wages = document.getElementById("wages").value ;
		var assetID = document.getElementById("assetID").value ;
		var driver = document.getElementById("driver").value ;
		
		var application = document.getElementById("application").value ;

		var wagesAssets = document.getElementById("wagesAssets").value ;
		
        var type = document.getElementById("type").value ;
		var units = document.getElementById("units").value ;
		var cost = document.getElementById("cost").value ;

		var typeprod = document.getElementById("typeprod").value ;
		var unitsprod = document.getElementById("unitsprod").value ;
		var location = document.getElementById("location").value ;



    const result = await fetch('/api/farmeractivitycreate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,
            'auth-token' : localStorage.getItem('token')
        },
        body: JSON.stringify({
            actname ,
						startDate,
						endDate,
						actproof,
						labourName,
						workduration,
						wages,
						assetID,
						driver,
                        application,
                        wagesAssets,
						type,
						units,
						cost,
						typeprod,
                        unitsprod,
						location




			// aadharid,
			// region,
			// crops_produced,
			// no_of_seedlings,
			// income,
			// latitude,
			// longitude
        })
    }).then((res) => res.json())
})