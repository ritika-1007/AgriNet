if(localStorage.getItem('token')==="") {
	window.location.replace("/") ;
}

var x = document.getElementsByClassName("logoutUser")[0] ;
x.addEventListener('click' , () => {
    localStorage.setItem("token" , "") ;
    localStorage.setItem("admintoken" , "") ;
    window.location.reload();
})