//*******************************Auto type************************************//\

var autotxt;
function autotyping(){
autotxt=new Typed(".about-me-string",{
    strings:["with an set extensive skills and a fine grip over <strong> HTML 5 <i class='fa-brands fa-html5'></i></strong>,<strong>CSS <i class='fa-brands fa-css3-alt'></i></strong> and <strong>Javascript <i class='fa-brands fa-js'></i></strong>"],
    loop:false,
});
}
autotyping();

//*******************************Email*********************************//

document.getElementById("hire-btn").addEventListener('click',function(){
    window.location.href = "mailto:abdulahad2a8@gmail.com";
})

const nav = document.querySelector(".nav-bar");

nav.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        nav.querySelectorAll("li a").forEach(function (item) {
            item.classList.remove("active");
        });
        event.target.classList.add("active");
        showSection(event.target);
    }
});