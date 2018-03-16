

document.getElementById("username").addEventListener("focus", function(){
    document.getElementById("username_hint").style.opacity = 0;
})
document.getElementById("username").addEventListener("blur", function(){
    if(document.getElementById("username").value==="")document.getElementById("username_hint").style.opacity = 255;
})

document.getElementById("password").addEventListener("focus", function(){
    document.getElementById("password_hint").style.opacity = 0;
})
document.getElementById("password").addEventListener("blur", function(){
    if(document.getElementById("password").value==="")document.getElementById("password_hint").style.opacity = 255;
})