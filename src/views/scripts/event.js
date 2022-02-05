class Event {
    eventSectionElement
    cardElement
    cardBodyElement
    titleText
    titleElement
    descriptionElement
    descriptionText

    constructor(titleText, descriptionText) {
        this.titleText = titleText
        this.descriptionText = descriptionText
        this.eventSectionElement = document.querySelector('#event-section')
        this.createElements()
    }

    createElements() {
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
        this.eventSectionElement.appendChild(this.cardElement)
    }
}

let eventArray = new Array()
eventArray.push(new Event('Cool', 'This is the description of the event'))
eventArray.push(new Event('Meme', 'This is the description of the event'))
eventArray.push(new Event('Cool', 'This is the description of the event'))
eventArray.push(new Event('Meme', 'This is the description of the event'))
eventArray.push(new Event('Cool', 'This is the description of the event'))
eventArray.push(new Event('Meme', 'This is the description of the event'))
eventArray.push(new Event('Cool', 'This is the description of the event'))
eventArray.push(new Event('Meme', 'This is the description of the event'))
eventArray.push(new Event('Cool', 'This is the description of the event'))
eventArray.push(new Event('Meme', 'This is the description of the event'))
