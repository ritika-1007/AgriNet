if (localStorage.getItem('token') === "") {
    window.location.replace("/");
}

var logout = document.getElementsByClassName("logoutUser")[0];
logout.addEventListener('click', () => {
    console.log("user")
    localStorage.setItem("token", "");
    localStorage.setItem("admintoken", "");
    window.location.reload();
})





var submitbtn = document.getElementById("submit");
submitbtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const aadharid = document.getElementById("aadharid").value;
    const region = document.getElementById("region").value;
    const crops_produced = document.getElementById("crops_produced").value;
    const no_of_seedlings = document.getElementById("no_of_seedlings").value;
    const income = document.getElementById("income").value;
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    console.log(name);
    console.log(aadharid);
    console.log(region);
    console.log(crops_produced);
    console.log(no_of_seedlings);
    console.log(income);
    console.log(latitude);
    console.log(longitude);
    const result = await fetch('/api/farmercreate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
            name,
            aadharid,
            region,
            crops_produced,
            no_of_seedlings,
            income,
            latitude,
            longitude
        })
    }).then((res) => res.json())
        .then((res) => console.log(res))
})

var y = document.getElementById("allfarmersbyuser")
y.addEventListener('click' , async(event)=> {
    event.preventDefault() ;
    const result = await fetch('/api/fetchfarmerdetails', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
    })
    console.log(result)
})