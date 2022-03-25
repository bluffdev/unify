//let submitButton = document.getElementById('submitButton');
//submitButton.addEventListener("click", register());

function register() {
    let email = document.getElementById('emailField').value
    let username = document.getElementById('usernameField').value
    let password = document.getElementById('passwordField').value

    /* Data which will be sent to server */
    let postObj = {
        username: username,
        password: password,
        email: email
    }

    let post = JSON.stringify(postObj)

    const url = '/api/auth/register'
    let xhr = new XMLHttpRequest()

    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.send(post)

    xhr.onload = function () {
        if (xhr.status === 201) {
            console.log('Post successfully created!')
        }
    }
}
