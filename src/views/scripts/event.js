class Event {
    eventSectionElement
    cardElement
    cardBodyElement
    titleText
    titleElement
    descriptionElement
    descriptionText
    rowElement
    colElement

    constructor(titleText, descriptionText, row) {
        this.titleText = titleText
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

        this.descriptionElement = document.createElement('p')
        this.descriptionElement.textContent = this.descriptionText
        this.descriptionElement.classList.add('card-text')

        this.cardBodyElement.appendChild(this.titleElement)
        this.cardBodyElement.appendChild(this.descriptionElement)
        this.cardElement.appendChild(this.cardBodyElement)
        this.colElement.appendChild(this.cardElement)
        this.rowElement.appendChild(this.colElement)
        this.eventSectionElement.appendChild(this.rowElement)
    }
}
