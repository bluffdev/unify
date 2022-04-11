const loadUniversities = () => {
    let UniList = new uniList(eventSectionElement = document.querySelector('#university-section'))

    const url = 'http://localhost:3000/api/university/getUniversityList'

    fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {

            for (let i = 0; i < data.universities.length; i++) {

                UniList.addUniversity(
                    data.universities[i].name,
                    data.universities[i].location,
                    data.universities[i].description,
                    data.universities[i].numberOfStudents
                )
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

loadUniversities()


const addAffiliation = () => {
    console.log('hello')
}