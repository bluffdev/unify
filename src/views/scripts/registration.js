import axios from 'axios'

const handleSubmit = async() => {
    // store the states in the form data
    email = document.getElementById("emailField")
    username = document.getElementById("usernameField")
    password = document.getElementById("passwordField")

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "/register",
        data: {
            email: email,
            username: username,
            password: password
        },
        headers: { "Content-Type": "json" },
      });
    } catch(error) {
      console.log(error)
    }
}

let button = document.getElementById('submitButton');

button.addEventListener('click', handleSubmit);





