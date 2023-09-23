var stars = document.querySelectorAll('.stars');
var star1 = document.querySelector("#star1")
var star2 = document.querySelector("#star2")
var star3 = document.querySelector("#star3")
var star4 = document.querySelector("#star4")
var star5 = document.querySelector("#star5")



stars.forEach(stars => {
    stars.addEventListener('click', logClickedStar);
})

function logClickedStar(star) {
    var clickedStarId = star.target.id;
    
    var result = document.querySelector(".result")
    result.textContent = "thanks for rating : " + clickedStarId  

    
    switch(clickedStarId) 
{
        case "star5" :
            star5.style.color = "#fff200"
            star3.style.color = "#fff200"
            star2.style.color = "#fff200"
            star1.style.color = "#fff200"
            star4.style.color = "#fff200"
        break
        case "star4" :
            star5.style.color = "#ffffff"
            star4.style.color = "#fff200"
            star3.style.color = "#fff200"
            star2.style.color = "#fff200"
            star1.style.color = "#fff200"
            break
        
        case "star3" :
            star5.style.color = "#ffffff"
            star4.style.color = "#ffffff"
            star3.style.color = "#fff200"
            star2.style.color = "#fff200"
            star1.style.color = "#fff200"
            break
            
        case "star2" :
            star5.style.color = "#ffffff"
            star4.style.color = "#ffffff"
            star3.style.color = "#ffffff"
            star2.style.color = "#fff200"
            star1.style.color = "#fff200"
        
            break
        case "star1" :
            star5.style.color = "#ffffff"
            star4.style.color = "#ffffff"
            star3.style.color = "#ffffff"
            star2.style.color = "#ffffff"
            star1.style.color = "#fff200"
        
        break;
        default :
        console.log("no input");
        break;
}
}

// Add click event listeners to all the stars
;




           