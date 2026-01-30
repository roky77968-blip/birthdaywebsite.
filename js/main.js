// Cake Cutting + Balloon + Happy Birthday
let cake = document.getElementById("cake");
let message = document.getElementById("birthdayText");

let startX = 0;
let cutDone = false;

// Mouse drag
cake.addEventListener("mousedown", e => startX = e.clientX);
cake.addEventListener("mouseup", e => {
    let endX = e.clientX;
    if(Math.abs(endX - startX) > 50 && !cutDone){
        cutDone = true;
        message.style.display = "block";
        launchBalloons();
    }
});

// Touch drag for mobile
cake.addEventListener("touchstart", e => startX = e.touches[0].clientX);
cake.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    if(Math.abs(endX - startX) > 50 && !cutDone){
        cutDone = true;
        message.style.display = "block";
        launchBalloons();
    }
});

// Balloon function
function launchBalloons(){
    for(let i=0;i<20;i++){
        let b = document.createElement("div");
        b.innerHTML="🎈";
        b.style.position="fixed";
        b.style.left=Math.random()*100+"%";
        b.style.bottom="-50px";
        b.style.fontSize="30px";
        b.style.animation="fly 4s linear forwards";
        document.body.appendChild(b);
        setTimeout(()=>b.remove(),4000);
    }
}
