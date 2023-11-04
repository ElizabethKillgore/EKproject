document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded")

fetch('https://api.artic.edu/api/v1/artworks') 
    .then(res => res.json())
    .then(data => console.log(data))

// In working out this fetch data to put it to good use easily, I will limit the GET request to reflect the info I want to use on my API rather than all the data for each painting. That worked out well, much less data.

// fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number')
//     .then(res => res.json())
//     .then(artData => console.log(artData))

//Now, I need to figure out how to console.log the array only.  Proving trickier than I thought.
fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,image_id')
    .then(res => res.json())
    .then(data => console.log(data))
   

fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number')
    .then(res => res.json())
    .then(artData => console.log(artData.data))

//Alright, success, that worked.  I got only the array data I wanted.  Next I have to get this data displayed.

//I added the images to my HTML so they are displayed on the page.  I did this by fetching the image id info in the manner outlined by the API.  The images come separately than the other info previously fetched.

//I had to add the addEventListener DOMContentLoaded at the top, so that the images would appear and the info would load in the proper order.
})