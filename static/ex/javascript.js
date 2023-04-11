console.clear();


const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

const form = document.getElementById('reg-form') ;
			form.addEventListener('submit', registerUser) ;
const regbtn = document.getElementById('register-btn') ;
regbtn.addEventListener("click" , registerUser)
			async function registerUser(event) {
				event.preventDefault()
				const username = document.getElementById('username').value
				const email = document.getElementById('email').value
				const password = document.getElementById('password').value

				const result = await fetch('/api/headregister', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username,
						email,
						password
					})
				}).then((res) => res.json())

				if (result.status === 'ok') {
					// everythign went fine
					alert('Success')
				} else {
					alert(result.error)
				}
			}

			const logform = document.getElementById('log-form')
			const logbtn = document.getElementById('logbtn')
			logform.addEventListener('submit', login)
			logbtn.addEventListener('click', login)

			async function login(event) {
				event.preventDefault()
				const email = document.getElementById('email-log').value
				const password = document.getElementById('password-log').value

				const result = await fetch('/api/headlogin', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email,
						password
					})
				}).then((res) => res.json())

				if (result.status === 'ok') {
					// everythign went fine
					console.log('Got the token: ', result.data)
					localStorage.setItem('token', result.data)
					alert('Success')
				} else {
					alert(result.error)
				}
				window.location.replace("/allfarmers")
			}