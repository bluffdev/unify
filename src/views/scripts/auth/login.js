const login = () => {
    let username = document.getElementById('usernameField').value
    let password = document.getElementById('passwordField').value

    let postObj = {
        username: username,
        password: password
    }

    let post = JSON.stringify(postObj)

    const url = 'http://localhost:3000/api/auth/login'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: post
    })
        .then((response) => response.json())
        .then((data) => {
            if (!data.status) {
                alert('Wrong username or password')
            } else {
                localStorage.setItem('id', data.id)

                if (data.isAdmin) {
                    localStorage.setItem('admin', true)
                    redirectToAdminDashboard()
                } else {
                    localStorage.setItem('admin', false)
                    redirectToDashboard()
                }
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

const addFormEventListener = () => {
    let form = document.querySelector('#loginForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        login()
    })
}

const redirectToDashboard = () => {
    window.location.href = 'http://localhost:3000/dashboard'
}

const redirectToAdminDashboard = () => {
    window.location.href = 'http://localhost:3000/adminDashboard'
}

addFormEventListener()
