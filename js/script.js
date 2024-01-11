var autotxt;
function autotyping(){
autotxt=new Typed(".about-me-string",{
    strings:["with extensive skills and a grip over HTML 5,CSS and Javascript"],
    loop:false,
});
}
autotyping();
document.getElementById("hire-btn").addEventListener('click',function(){
    window.location.href = "mailto:abdulahad2a8@gmail.com";
})