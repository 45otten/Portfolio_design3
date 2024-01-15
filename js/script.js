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


function downloadfile(){
  var filepath = "./CV.txt";
  var linkFile = document.createElement("a");
  linkFile.href = filepath;
  linkFile.download = "Web Designer Ahad CV";
  document.body.appendChild(link);
  linkFile.click();
  document.body.removeChild(link);
}
