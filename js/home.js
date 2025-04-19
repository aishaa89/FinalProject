
// var welcomeMsg=document.querySelector(".home h1");
var logout=document.querySelector(".logout");


// var userNames=[];

// if(localStorage.getItem("SessionUserName")!=null){
//     userNames=JSON.parse(localStorage.getItem("SessionUserName"));
// }

// welcomeMsg.innerHTML='Hello '+' ' + userNames;

logout.addEventListener('click',function(eventInfo){
    // localStorage.removeItem("SessionUserName");
    window.location='./index.html';
})
function Scrollup(){
    scrollTo(0,0)
}

window.addEventListener("scroll",()=>{
       if(window.scrollY>50){
          this.document.getElementById("nav").classList.add("fixed-top");
       }else{
        this.document.getElementById("nav").classList.remove("fixed-top");

       }
})

