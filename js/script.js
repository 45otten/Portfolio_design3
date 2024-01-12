var autotxt;
function autotyping() {
  autotxt = new Typed(".about-me-string", {
    strings: [
      "with extensive skills and a grip over <strong>HTML 5 <i class='fa-brands fa-html5'></i></strong>,<strong>CSS <i class='fa-brands fa-css3-alt'></i></strong> and <strong>Javascript <i class='fa-brands fa-js'></i></strong>",
    ],
    loop: false,
  });
}
autotyping();

let banner = document.querySelector(".nav-bar");
let navbar = document.querySelector(".nav-bar nav");

function downloadFile() {
  var fileUrl = "assets/files/CV.txt";
  var link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Web Designer Ahad_CV";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
