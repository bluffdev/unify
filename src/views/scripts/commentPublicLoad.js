const loadPublicEventComments = () => {
    let commentList = new commentDashboard(
        (eventSectionElement = document.querySelector('#comment-section'))
    )

    const url = 'http://localhost:3000/api/comments/getPublicEventComments'

    fetch(url, { method: 'GET' })
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
