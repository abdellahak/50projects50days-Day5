let loadingPage = document.getElementById("loadingIcon");
let pourcentage = document.getElementById("pourcentage");
let main = document.querySelector("main");

loadingInterval = setInterval(hideLoading, 20)
let count = 100;
let opacity = 1;
function hideLoading(){
    count -= 1
    opacity -= 0.01 
    main.style.filter= `blur(${count/10}px)`
    loadingPage.style.opacity = `${opacity}`
    if(pourcentage.innerText<=100){
        pourcentage.innerText = (Number(pourcentage.innerText)+1).toFixed(0)
    }
    if(count == 0){
        loadingPage.style.display= "none";
        clearInterval(loadingInterval)
    }
}



