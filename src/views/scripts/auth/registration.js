//let submitButton = document.getElementById('submitButton');
//submitButton.addEventListener("click", register());

function register() {
    let email = document.getElementById('emailField').value
    let username = document.getElementById('usernameField').value
    let password = document.getElementById('passwordField').value
    let university = document.getElementById('collegeSelect').value

    /* Data which will be sent to server */
    let postObj = {
        username: username,
        password: password,
        email: email,
        university: university
    }

    let post = JSON.stringify(postObj)

    const url = 'http://localhost:3000/api/auth/register'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: post
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.errCode !== undefined) {
                alert('The username or email you entered is already in use')
            } else {
                redirectToLogin()
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

const addFormEventListener = () => {
    let form = document.querySelector('#registerForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        register()
    })
}

addFormEventListener()

const redirectToLogin = () => {
    window.location.href = 'http://localhost:3000/login'
}
