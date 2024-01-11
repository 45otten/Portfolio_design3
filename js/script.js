var autotxt;
function autotyping(){
autotxt=new Typed(".about-me-string",{
    strings:["with extensive skills and a grip over HTML 5,CSS and Javascript"],
    loop:false,
});
}
autotyping();

let banner = document.querySelector(".nav-bar");
let navbar = document.querySelector(".nav-bar nav");

function downloadFile() {
    var fileUrl = 'assets/files/CV.txt';
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Web Designer Ahad_CV';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}