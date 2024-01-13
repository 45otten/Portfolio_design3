var automail;
function typeautomail() {
  automail = new Typed(".email-cont", {
    strings: ["abdulahad2a8@gmail.com <i class='fa-regular fa-envelope'></i>"],
    typeSpeed: 50,
    loop: false,
    onComplete: () => {
      automail.cursor.style.display = "none";
    },
  });
}
typeautomail();

var autophone;
function typeautophone() {
  autophone = new Typed(".phone-cont", {
    strings: ["+92-321-5977-229 <i class='  fa-solid fa-phone'></i>"],
    typeSpeed: 50,
    onComplete: () => {
      autophone.cursor.style.display = "none";
    },
  });
}
setTimeout(typeautophone, 1700);

var autoinsta;
function typeautoinsta() {
  autoinsta = new Typed(".insta-cont", {
    strings: ["@abdulahad_2484 <i class='fa-brands fa-instagram'></i>"],
    typeSpeed: 50,
    onComplete: () => {
      autoinsta.cursor.style.display = "none";
    },
  });
}
setTimeout(typeautoinsta, 2800);

var autofiverr;
function typeautofiverr() {
  autofiverr = new Typed(".fiverr-cont", {
    strings: ["@ahad_im <i class='fa-solid fa-fire'></i>"],
    typeSpeed: 50,
    onComplete: () => {
      autofiverr.cursor.style.display = "none";
    },
  });
}
setTimeout(typeautofiverr, 4000);
