console.log('Login.Js is Working...');


window.onload = function () {

    console.log('Sign.js Is Working..');
    const form = document.getElementById('loginForm');

    console.log(form);
    form.addEventListener('submit', formValidation)

    async function formValidation(event) {

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const result = await fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then((res) => res.json());

        if (result.status === 'ok') {
            //Everything is fine

            //Reedirect
            location.replace('/book/dashboard');
            
            //set token in localStorage
            localStorage.setItem('token', result.data);
            console.log('Got the token : ', result.data);
        }
        else {
            console.log(result);
            alert("From Login.js "+result.error);
        }
        
    }

}
