const loadRSOs = () => {
    let rsoList = new rsoDashboard(
        (eventSectionElement = document.querySelector('#rso-section'))
    )

    const url = 'http://localhost:3000/api/rsos/getRSOs'

    fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.rsos.length; i++) {
                rsoList.addRSO(data.rsos[i].name, data.rsos[i].description)
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

const loadCurrentRSOs = () => {
    let rsoList = new rsoDashboard(
        (eventSectionElement = document.querySelector('#current-rso-section'))
    )

    const url = 'http://localhost:3000/api/rsos/getCurrentRSOs'
    const id = localStorage.getItem('id')

    const postObj = {
        id: id
    }

    const post = JSON.stringify(postObj)

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: post
    })
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.rsos.length; i++) {
                rsoList.addCurrentRSO(
                    data.rsos[i].name,
                    data.rsos[i].description
                )
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

loadRSOs()
loadCurrentRSOs()

const addAffiliation = () => {
    console.log('hello')
}
