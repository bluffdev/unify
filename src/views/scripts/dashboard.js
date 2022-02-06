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

    addEvent() {
        this.eventList.push(
            new Event(
                'Name',
                'This is a description of the event and I am trying to make it longer',
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

let dashboard = new Dashboard()
dashboard.addEvent()
dashboard.addEvent()
dashboard.addEvent()
dashboard.addEvent()
dashboard.addEvent()
dashboard.addEvent()
dashboard.addEvent()
dashboard.addEvent()
dashboard.addEvent()
dashboard.addEvent()
