

function myComment(){
    document.querySelector(".comment-container").style.display = "inline";
}
function allClose(){
    document.querySelector(".comment-container").style.display = "none";
    document.querySelector(".comment-container").style.transition = "0.3 ease-in-out";
}
function myInput(){
    var x = document.createElement("input");
    x.setAttribute("fileInput", "hidden")
    
}
function clickedLike(){
    document.querySelector(".fa-thumbs-up").style.color = "#1876f2";
}
function clickedPay(){
    document.querySelector(".fa-money-check").style.color = "#1876f2";
}