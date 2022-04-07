class Dashboard {
    eventSectionElement
    eventList
    eventRows
    numberOfEvents
    rowIndex

    constructor() {
        this.eventSectionElement = document.querySelector('#event-section')
        this.eventList = new Array()
        let row = document.createElement('div')
        row.classList.add('row')
        row.classList.add('justify-content-start')
        this.eventRows = new Array()
        this.eventRows.push(row)
        this.numberOfEvents = 0
        this.rowIndex = 0
    }

    addEvent(name, location, description) {
        this.eventList.push(
            new Event(
                name,
                'April 3, 2022 at 4:00 p.m.',
                location,
                description,
                this.eventRows[this.rowIndex]
            )
        )

        this.numberOfEvents += 1

        if (this.numberOfEvents % 6 === 0) {
            let row = document.createElement('div')
            row.classList.add('row')
            row.classList.add('justify-content-start')
            this.eventRows.push(row)
            this.rowIndex += 1
        }
    }
}

const loadDashboard = () => {
    let dashboard = new Dashboard()

    const url = 'http://localhost:3000/api/events/getEvents'

    fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.events.length; i++) {
                dashboard.addEvent(
                    data.events[i].name,
                    data.events[i].location,
                    data.events[i].description
                )
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

loadDashboard()

const createRSO = () => {
    let name = document.getElementById('eventName').value
    let description = document.getElementById('eventDescription').value

    let postObj = {
        name: name,
        description: description
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

const addFormEventListener = () => {
    let form = document.getElementById('rsoForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        createRSO()
    })
}

addFormEventListener()
