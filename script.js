let img = document.querySelector("img")
let p = document.querySelector("p")


function chand(){
    let randomNumber = Math.floor(Math.random() * 2);
    // console.log(randomNumber)

    if(randomNumber === 1){
        p.innerHTML = "Hurrah! You won the Toss";
        img.src = "./images/chand.jpeg"
    }
    else{
        p.innerHTML = "Sorry! You loss the Toss";
        img.src = "./images/masjid.jpeg"
    }
}

function masjid(){
    let randomNumber = Math.ceil(Math.random() * 2);
    // console.log(randomNumber)
    
    if(randomNumber === 1){
        p.innerHTML = "Sorry! You loss the Toss";
        img.src = "./images/chand.jpeg"
    }
    else{
        p.innerHTML = "Hurrah! You won the Toss";
        img.src = "./images/masjid.jpeg"
    }
}