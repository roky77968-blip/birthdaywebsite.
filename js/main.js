// Cake Cutting + Balloon Animation
let cake = document.getElementById("cake");
let message = document.getElementById("birthdayText");
let cutDone = false;
let startX = 0;

// Desktop drag
cake.addEventListener("mousedown", e => startX = e.clientX);
cake.addEventListener("mouseup", e => {
    let endX = e.clientX;
    if(Math.abs(endX - startX) > 50 && !cutDone){
        cutDone = true;
        message.style.display = "block";
        launchBalloons();
    }
});

// Mobile drag
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
    for(let i=0;i<30;i++){
        let b = document.createElement("div");
        b.innerHTML="🎈";
        b.style.position="fixed";
        b.style.left=Math.random()*100+"%";
        b.style.bottom="-50px";
        b.style.fontSize=Math.floor(Math.random()*30+20)+"px";
        b.style.animation="fly "+(3+Math.random()*2)+"s linear forwards";
        document.body.appendChild(b);
        setTimeout(()=>b.remove(),4000);
    }
}
