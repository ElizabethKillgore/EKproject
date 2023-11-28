document.addEventListener("DOMContentLoaded", () => {
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

    const paintingTitle = document.createElement('h4')
    paintingTitle.textContent = paintingData.title
    paintingCard.append(paintingTitle)
    //  console.log(paintingTitle)
     
    const paintingArtist = document.createElement('h4')
    paintingArtist.textContent = paintingData.artist_display
    paintingCard.append(paintingArtist)
    // console.log(paintingArtist)
    
    const paintingDate = document.createElement('h4')
    paintingDate.textContent = paintingData.date_display
    paintingCard.append(paintingDate)
    // console.log(paintingDate)
}

const inputForm = document.querySelector("form")

inputForm.addEventListener("submit", (e) => {
    e.preventDefault()
     addUserComments(e.target["inputComment"].value)
     e.target["inputComment"].value = ""

    }) 

function addUserComments(comments) {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    btn.textContent = 'x'
    li.textContent = comments
    li.append(btn)
    document.getElementById('comments').append(li)
    btn.addEventListener('click', () => li.remove())
}
})

//I am mindful not to use repetitive code, as per the instructions for this final project, but I include all of the other fetches, hereinbelow, to show the process and all of the info that I received for future reference. 

//I have put a comment form for users, with an event listener, to comment on a specific piece of art of the twelve fetched.  I want to make sure that the comment form can be applied to the paintings or pieces of art the user wants to comment and then let the user keep their comments, as they add more.  They can keep a list of their comments, or erase them individually, with another event listener.  I would have done a POST, so when the page refreshes the comments stay until erased by the user, but trying to keep it simple. 

//This fetch is the first getting the whole load of data for group of twelve.
fetch('https://api.artic.edu/api/v1/artworks') 
    .then(res => res.json())
    .then(data => console.log(data))

// In working out this fetch data to put it to good use easily, I will limit the GET request to reflect the info I want to use on my API rather than all the data for each painting. I want just id, title, artist info, date, first.  That worked out well, much less data.

//This fetch limits the info to only the fields that I want right now.
fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number')
    .then(res => res.json())
    .then(artData => console.log(artData))

//Now, I need to figure out how to console.log the array only.  Proving trickier than I thought.

//But first, here, I will fetch the data with the image ID so that I can set up the html with the images.

//This fetch is the image_id for the first twelve that I originally fetched at the beginning of my project work.
fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,image_id')
    .then(res => res.json())
    .then(data => console.log(data))
//Ok got that working.  Now get only the array info without all the other data. 

//This fetch is the array of twelve, only, not the other data.
   
fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number')
    .then(res => res.json())    
    .then(artData => (console.log(artData.data)))
    

// Two issues that I ran into with the API 'Art Institue of Chicago' as my Fetch source.  ARTIC has a built-in limit of twelve works at a time.    
//One issue is that the twelve they send in the fetch are random and change periodically as you refresh your page(browser).  (You can get more or less, but twelve works for my purposes.)
// Two, is that they do not include images with the art pieces information, the images come separately than the other info previously fetched. The image info must first be in a GET request asking for the image ID number associated with the element ID number for the painting.  Then you must use that very long image ID number to get your image.  I fetched the image id info in the manner outlined by the API.  Then, I hardcoded twelve paintings into the HTML and used those id numbers as src to get each of the twelve images.  Not practical as I can't associate the images with the painting info through a simple fetch.  So instead I am using the images to outline the website as border decoration.  I don't have images with the twelve chosen works of art.  But I will take advantage of the fetch returning different works of art when I refresh my work page and the fetch re-fetches different works of art.  I will use that as a way to make the site more interesting with changing pieces popping up periodically.  Eventually, I can redo the app where the fetch will grab the images along with the works of art info.  But for now, must keep it simple.


//Alright, success, that worked.  I got only the array data I wanted.  Next I have to get this data displayed.
//Ok, that worked.

//I had to add the addEventListener DOMContentLoaded at the top, so that the images would appear and the info would load timely.

//Important note here:  I realize that there is an extra forward slash / on my page and in the URL but to try and fix this I find risky and I am trying to stay in the course and not get timed out of the course.

