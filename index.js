document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded")


fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number')
    .then(res => res.json())
    .then(artData => { 
        console.log(artData.data)
        artData.data.forEach(paintingData => {
        renderOnePainting(paintingData)
        })    
    })

function renderOnePainting(paintingData) {
    paintingCard = document.createElement('li')
    paintingCard.className = 'painting-card'
    document.querySelector("#painting-collection").append(paintingCard) 
     console.log(paintingCard)  

    let paintingTitle = document.createElement('h4')
    paintingTitle.textContent = paintingData.title
    paintingCard.append(paintingTitle)
    //  console.log(paintingTitle)
     
    let paintingArtist = document.createElement('h4')
    paintingArtist.textContent = paintingData.artist_display
    paintingCard.append(paintingArtist)
    // console.log(paintingArtist)
    
    let paintingDate = document.createElement('h4')
    paintingDate.textContent = paintingData.date_display
    paintingCard.append(paintingDate)
    // console.log(paintingDate)
}
 

//I would like to put a comment form for each paintingCard.  Or, another way is to make sure that the comment form can be applied to the painting the user wants to comment on by keeping their comments.  If I do that I may need to display the painting ID number.  I don't want to get too complicated, need to keep this SPA simple so I can complete it quickly.  Time is of the essence, in this case.  I get the material and supremely enjoy the process herein, but I am way behind in the course schedule due to circumstances that were beyond my control.
const inputForm = document.querySelector("form")

inputForm.addEventListener("submit", (e) => {
    e.preventDefault()
     addUserComments(e.target["inputComment"].value)
}) 
function addUserComments(comments) {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.textContent = 'x'
    li.textContent = comments
    li.append(btn)
    document.getElementById('comments').append(li)
    btn.addEventListener('click', () => li.remove())
}
})


// This fetch is the first getting the whole load of data for group of twelve.
// fetch('https://api.artic.edu/api/v1/artworks') 
//     .then(res => res.json())
//     .then(data => console.log(data))

// In working out this fetch data to put it to good use easily, I will limit the GET request to reflect the info I want to use on my API rather than all the data for each painting. That worked out well, much less data.

//This fetch limits the info to only the fields that I want right now.
// fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number')
//     .then(res => res.json())
//     .then(artData => console.log(artData))

//Now, I need to figure out how to console.log the array only.  Proving trickier than I thought.

//But first, here, I will fetch the data with the image ID so that I can set up the html with the images.

//This fetch is the image_id for the first twelve that I originally fetched at the beginning of my project work.
// fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,image_id')
//     .then(res => res.json())
//     .then(data => console.log(data))
//Ok got that working.  Now get only the array info without all the other data. 

//This fetch is the array only, not the other objects.

    
// fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number')
//     .then(res => res.json())    
//     .then(artData => (console.log(artData.data)))
    
// }) 
// Two issues that I ran into with the API 'Art Institue of Chicago'.  One, is that the twelve they send in the fetch are random and change as you refresh your page(browser).  Two, is that the image info must first be in a GET request asking for the image ID number associated with the element ID number for the painting.  Then you must use that very long image ID number to get your image.  Thus, I hardcoded twelve paintings into the HTML and used those id numbers as src to get each of the twelve images.  Not practical as I can't associate the images with the painting info through a fetch. 


//Alright, success, that worked.  I got only the array data I wanted.  Next I have to get this data displayed.

//I added the images to my HTML so they are displayed on the page.  I did this by fetching the image id info in the manner outlined by the API.  The images come separately than the other info previously fetched.

//I had to add the addEventListener DOMContentLoaded at the top, so that the images would appear and the info would load in the proper order.

// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

// document.addEventListener("click", (e) => {
//     const heart = e.target
//     fetch() 
//     .then(() => { 
//           if (heart.innerText === EMPTY_HEART) {
//          heart.innerText = FULL_HEART
//          heart.className = "activated-heart"
//           } else {
//          heart.innerText = EMPTY_HEART
//          heart.className = ""
//           }
//         })
// })       