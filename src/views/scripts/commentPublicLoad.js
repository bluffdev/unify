const loadPublicEventComments = () => {
    let commentList = new commentDashboard(
        (eventSectionElement = document.querySelector('#comment-section'))
    )

    const url = 'http://localhost:3000/api/comments/getPublicEventComments'
    const eventName = localStorage.getItem('eventName')

    const postObj = {
        name: eventName
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
            for (let i = 0; i < data.comments.length; i++) {
                commentList.addComment(data.comments[i].description)
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}

loadComments()