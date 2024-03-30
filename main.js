let title = document.querySelector(".title")
let list = document.querySelector(".checking-list")
let btn = document.querySelector(".reload-btn")

window.onload = function(){
    if(window.navigator.onLine){
        console.log("onLoad")
        onLine()
    }
    else ofLine()
}

window.addEventListener("online", function(){
    onLine()
})

window.addEventListener("offline", function(){
    offLine()
})


function onLine (){
    title.innerHTML = "Online Now"
    title.style.color = "green"
    list.classList.add("hide")
    btn.classList.add("hide")
}

function offLine (){
    title.innerHTML = "Offline Now"
    title.style.color = "#666"
    list.classList.remove("hide")
    btn.classList.remove("hide")
}

btn.onclick = function(){
    window.location.reload()
}