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
            localStorage.setItem('token', data.token)
            // localStorage.setItem('id', data.id)
            redirectToDashboard()
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
    const url2 = 'http://localhost:3000/dashboard'
    // const token = localStorage.getItem('token')

    fetch(url2, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY0Nzk4Njk2OSwiZXhwIjoxNjQ4MDczMzY5fQ.SViFaTKOvr4fv8xODmXE3W3-SKQe_CNVfdmPogziNRI'
        }
    })
        .then((response) => {
            if (response.status === 200) {
                // window.location.href = 'http://localhost:3000/dashboard'
                localStorage.setItem('authenticated:', true)
            }
            response.json()
        })
        // .then((data) => {
        //     console.log(data)
        // })
        .catch((err) => console.error(err))
}

addFormEventListener()
