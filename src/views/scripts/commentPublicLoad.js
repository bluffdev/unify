
let tableHeaders = ['Comments', 'Rating']

const createScoreboardTable = () => {
    const commentSection = document.getElementById('comment-section')
    while (commentSection.firstChild) commentSection.removeChild(commentSection.firstChild) // Remove all children from scoreboard div (if any)

    let scoreboardTable = document.createElement('table') // Create the table itself
    scoreboardTable.className = 'scoreboardTable'

    let scoreboardTableHead = document.createElement('thead') // Creates the table header group element
    scoreboardTableHead.className = 'scoreboardTableHead'

    let scoreboardTableHeaderRow = document.createElement('tr') // Creates the row that will contain the headers
    scoreboardTableHeaderRow.className = 'scoreboardTableHeaderRow'

    // Will iterate over all the strings in the tableHeader array and will append the header cells to the table header row
    tableHeaders.forEach(header => {
    let scoreHeader = document.createElement('th') // Creates the current header cell during a specific iteration
    scoreHeader.innerText = header
    scoreboardTableHeaderRow.append(scoreHeader) // Appends the current header cell to the header row
    })
    scoreboardTableHead.append(scoreboardTableHeaderRow) // Appends the header row to the table header group element
    scoreboardTable.append(scoreboardTableHead)
    let scoreboardTableBody = document.createElement('tbody') // Creates the table body group element
    scoreboardTableBody.className = "scoreboardTable-Body"
    scoreboardTable.append(scoreboardTableBody) // Appends the table body group element to the table
    commentSection.append(scoreboardTable) // Appends the table to the scoreboard div
}

const appendScores = (comment, rating) => {
    const scoreboardTable = document.querySelector('.scoreboardTable') // Find the table we created
    let scoreboardTableBodyRow = document.createElement('tr') // Create the current table row
    scoreboardTableBodyRow.className = 'scoreboardTableBodyRow'
    scoreboardTableBodyRow.addEventListener('click', commentDelete)
    // Lines 72-85 create the 2 column cells that will be appended to the current table row

    let scoreRanking = document.createElement('td')
    scoreRanking.innerText = rating
    let usernameData = document.createElement('td')
    usernameData.innerText = comment

    let deleteSection = document.createElement('td')

    let deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteButton')
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', deleteCom)

    let editButton = document.createElement('button')
    editButton.classList.add('editButton')
    editButton.innerText = 'Edit'
    editButton.dataset.target = '#editModal'
    editButton.dataset.toggle = 'modal'

    deleteSection.appendChild(deleteButton)
    deleteSection.appendChild(editButton)

    scoreboardTableBodyRow.append(scoreRanking, usernameData, deleteSection) // Append all 2 cells to the table row
    scoreboardTable.append(scoreboardTableBodyRow) // Append the current row to the scoreboard table body
    }



const loadComments = () => {

    const url = 'http://localhost:3000/api/comments/getComments'
    const name = localStorage.getItem('eventName')

    const postObj = {
        name: name
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

            createScoreboardTable() // Clears scoreboard div if it has any children nodes, creates & appends the table

            // Iterates through all the objects in the scores array and appends each one to the table body
          for (let i = 0; i < data.comments.length; i++) {
                appendScores(data.comments[i].rating, data.comments[i].comment) // Creates and appends each row to the table body
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}


loadComments()

const createCom = () => {
    let name = localStorage.getItem('eventName')
    let id = localStorage.getItem('id')

    let comment = document.getElementById('comment').value
    let rating = document.getElementById('rating').value

    let postObj = {
        name: name,
        id: id,
        comment: comment,
        rating: rating
    }

    let post = JSON.stringify(postObj)

    const url = 'http://localhost:3000/api/comments/createComment'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: post
    })
        .then((response) => response.json())
        .then(() => {
            loadComments()
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}  


const deleteCom = () => {

    let comment = localStorage.getItem('comEdit')

    let postObj = {
        comment: comment
    }

    let post = JSON.stringify(postObj)

    const url = 'http://localhost:3000/api/comments/deleteComment'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: post
    })
        .then((response) => response.json())
        .then(() => {
            loadComments()
        })  
        .catch((error) => {
            console.error('Error:', error)
        })
}  

const editCom = () => {

    let editComment = document.getElementById('editedComment').value

    let oldComment = localStorage.getItem('comEdit')

    let postObj = {
        oldComment: oldComment,
        editComment: editComment
    }

    let post = JSON.stringify(postObj)

    const url = 'http://localhost:3000/api/comments/editComment'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: post
    })
        .then((response) => response.json())
        .then(() => {
            loadComments()
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}  


const commentDelete = () => {
    $('.scoreboardTableBodyRow').click(function (e) {
        e.preventDefault()
        const comEdit = $(this).children("td:first", this).text();
        localStorage.setItem('comEdit', comEdit)
    })
}
