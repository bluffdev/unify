class Event {
    eventSectionElement
    cardElement
    cardBodyElement
    titleText
    titleElement
    dateElement
    dateText
    locationIcon
    locationElement
    locationText
    descriptionElement
    descriptionText
    rowElement
    colElement

    constructor(titleText, dateText, locationText, descriptionText, row) {
        this.titleText = titleText
        this.dateText = 'On ' + dateText
        this.locationText = locationText
        this.descriptionText = descriptionText
        this.eventSectionElement = document.querySelector('#event-section')
        this.rowElement = row
        this.createElements()
    }

    createElements() {
        this.colElement = document.createElement('div')
        this.colElement.classList.add('col-lg-2')
        this.colElement.classList.add('col-md-6')
        this.colElement.classList.add('col-sm-12')

        this.cardElement = document.createElement('div')
        this.cardElement.classList.add('card')
        this.cardElement.classList.add('event-card')

        this.cardBodyElement = document.createElement('div')
        this.cardBodyElement.classList.add('card-body')

        this.titleElement = document.createElement('h3')
        this.titleElement.textContent = this.titleText
        this.titleElement.classList.add('card-title')

        this.dateElement = document.createElement('h5')
        this.dateElement.textContent = this.dateText

        this.locationIcon = document.createElement('i')
        this.locationIcon.classList.add('bi')
        this.locationIcon.classList.add('bi-geo-alt-fill')
        this.locationIcon.classList.add('mb-2')
        this.locationIcon.classList.add('text-muted')

        this.locationElement = document.createElement('h5')
        this.locationElement.textContent = this.locationText
        this.locationElement.classList.add('locationElement')
        this.locationElement.classList.add('mb-2')
        this.locationElement.classList.add('text-muted')

        this.descriptionElement = document.createElement('p')
        this.descriptionElement.textContent = this.descriptionText
        this.descriptionElement.classList.add('card-text')

        let locationDiv = document.createElement('div')
        locationDiv.classList.add('locationDiv')
        locationDiv.appendChild(this.locationIcon)
        locationDiv.appendChild(this.locationElement)

        this.cardBodyElement.appendChild(this.titleElement)
        this.cardBodyElement.appendChild(this.dateElement)
        this.cardBodyElement.appendChild(locationDiv)
        this.cardBodyElement.appendChild(this.descriptionElement)
        this.cardElement.appendChild(this.cardBodyElement)
        this.colElement.appendChild(this.cardElement)
        this.rowElement.appendChild(this.colElement)
        this.eventSectionElement.appendChild(this.rowElement)
    }
}
