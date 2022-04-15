const loadPublicEvents = () => {
    let dashboard = new Dashboard(
        (eventSectionElement = document.querySelector('#public-event-section'))
    )

    const url = 'http://localhost:3000/api/events/getPublicEvents'

    fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.events.length; i++) {
                let time = data.events[i].time

                let hour = time.slice(0, 2)
                let pm = 'a.m.'
                if (hour > 12) {
                    hour = hour - 12
                    pm = 'p.m.'
                }

                time = `${hour}${time.slice(2, 5)} ${pm}`
                let date = `On ${data.events[i].month}/${data.events[i].day}/${data.events[i].year} at ${time}`

                dashboard.addEvent(
                    data.events[i].name,
                    date,
                    data.events[i].location,
                    data.events[i].description
                )
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

const loadPrivateEvents = () => {
    let dashboard = new Dashboard(
        (eventSectionElement = document.querySelector('#private-event-section'))
    )

    const url = 'http://localhost:3000/api/events/getPrivateEvents'
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
            for (let i = 0; i < data.events.length; i++) {
                let time = data.events[i].time

                let hour = time.slice(0, 2)
                let pm = 'a.m.'
                if (hour > 12) {
                    hour = hour - 12
                    pm = 'p.m.'
                }

                time = `${hour}${time.slice(2, 5)} ${pm}`
                let date = `On ${data.events[i].month}/${data.events[i].day}/${data.events[i].year} at ${time}`

                dashboard.addPrivateEvent(
                    data.events[i].name,
                    date,
                    data.events[i].location,
                    data.events[i].description
                )
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

const loadRSOEvents = () => {
    let dashboard = new Dashboard(
        (eventSectionElement = document.querySelector('#RSO-event-section'))
    )

    const url = 'http://localhost:3000/api/events/getRSOEvents'
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
            for (let i = 0; i < data.events.length; i++) {
                let time = data.events[i].time

                let hour = time.slice(0, 2)
                let pm = 'a.m.'
                if (hour > 12) {
                    hour = hour - 12
                    pm = 'p.m.'
                }

                time = `${hour}${time.slice(2, 5)} ${pm}`
                let date = `On ${data.events[i].month}/${data.events[i].day}/${data.events[i].year} at ${time}`

                dashboard.addRSOEvent(
                    data.events[i].name,
                    date,
                    data.events[i].location,
                    data.events[i].description
                )
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

loadPublicEvents()
loadPrivateEvents()
loadRSOEvents()

const createRSO = () => {
    let name = document.getElementById('rsoName').value
    let description = document.getElementById('rsoDescription').value
    let email1 = document.getElementById('eventEmail').value
    let email2 = document.getElementById('eventEmail1').value
    let email3 = document.getElementById('eventEmail2').value
    let email4 = document.getElementById('eventEmail3').value
    let email5 = document.getElementById('eventEmail4').value

    let postObj = {
        name: name,
        description: description,
        email1: email1,
        email2: email2,
        email3: email3,
        email4: email4,
        email5: email5
    }

    let post = JSON.stringify(postObj)

    const url = 'http://localhost:3000/api/rsos/createRSO'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: post
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error:', error)
        })
}

const createEvent = () => {
    let name = document.getElementById('eventName').value
    let description = document.getElementById('eventDescription').value
    let location = document.getElementById('eventLocation').value
    let date = document.getElementById('eventTime').value
    let year = date.slice(0, 4)
    let month = date.slice(6, 7)
    let day = date.slice(9, 10)
    let time = date.slice(11, 16)

    let postObj = {
        name: name,
        description: description,
        location: location,
        year: year,
        month: month,
        day: day,
        time: time
    }

    let post = JSON.stringify(postObj)

    const url = 'http://localhost:3000/api/events/createPrivateEvent'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: post
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error:', error)
        })
}

const addFormEventListener = () => {
    let form = document.getElementById('rsoForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        createRSO()
    })
    let form2 = document.getElementById('eventForm')
    form2.addEventListener('submit', (e) => {
        e.preventDefault()
        createEvent()
    })
}

const goToPublicComments = () => {

    $( ".card-title" ).click(function(e) {
        e.preventDefault();
        var eventName = $(this).text();
        localStorage.setItem('eventName', eventName)
        window.location.href = 'http://localhost:3000/commentPage.html'
    });

}

