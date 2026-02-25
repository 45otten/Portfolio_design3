var autotxt;
function autotyping() {
  autotxt = new Typed(".about-me-string", {
    strings: [
      " make Games :)",
    ],
    typeSpeed: 50,
    onComplete: () => {
      autotxt.cursor.style.display = "none";
    },
    loop: false,
  });
}
autotyping();


// function downloadfile(){
//   var filepath = "./CV.txt";
//   var linkFile = document.createElement("a");
//   linkFile.href = filepath;
//   linkFile.download = "Web Designer Ahad CV";
//   document.body.appendChild(linkFile);
//   linkFile.click();
//   document.body.removeChild(linkFile);
// }
