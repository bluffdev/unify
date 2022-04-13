const loadRSOs = () => {
    let rsoList = new rsoDashboard(
        (eventSectionElement = document.querySelector('#rso-section'))
    )

    const url = 'http://localhost:3000/api/rsos/getRSOs'

    fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.rsos)
            for (let i = 0; i < data.rsos.length; i++) {
                rsoList.addRSO(data.rsos[i].name, data.rsos[i].description)
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

loadRSOs()

const addAffiliation = () => {
    console.log('hello')
}
