// -------------- All selections -----------------------
const skills = document.querySelector(".Skills");
const educations = document.querySelector(".Education");
const skillList = document.querySelector(".Skills--list");
const educationList = document.querySelector(".Education--list");
const hoverService = document.querySelector(".services1");
const changeColorSec = document.querySelector(".services1--heading");
const hoverService2 = document.querySelector(".services2");
const changeColorSec2 = document.querySelector(".services2--heading");
const right = document.querySelector(".right");
const message = document.querySelector("#message");
const emial = document.querySelector("#Your_email");
const projectImg = document.querySelector(".project--img");
const mainContent = document.querySelector(".mainContent");
const navBar = document.querySelector(".navBar");
const rightContact = document.querySelector(".Contact_right--Part"); // common parent element for submit button and textArea
const submit = document.querySelector(".btn-primary");
// ----------------- making buttons of about section ----------------
skills.addEventListener("click", function () {
  if (educations.classList.contains("btnDecoration")) {
    educations.classList.remove("btnDecoration");
  } else {
    skills.classList.add("btnDecoration");
  }
  skills.classList.add("btnDecoration");
  if (skillList.classList.contains("hidden")) {
    // e education list
    skillList.classList.remove("hidden");
    educationList.classList.add("hidden");
  }
});

educations.addEventListener("click", function () {
  if (skills.classList.contains("btnDecoration")) {
    skills.classList.remove("btnDecoration");
  } else {
    educations.classList.add("btnDecoration");
  }
  educations.classList.add("btnDecoration");
  if (educationList.classList.contains("hidden")) {
    educationList.classList.remove("hidden");
    skillList.classList.add("hidden");
  }
});

// ---------Adding property to service section -------------------
hoverService.addEventListener("mouseover", function () {
  // console.log("dot");
  changeColorSec.classList.add("design");
});
hoverService2.addEventListener("mouseover", function () {
  // console.log("dot");
  changeColorSec2.classList.add("design");
});
hoverService.addEventListener("mouseout", function () {
  changeColorSec.classList.remove("design");
});
hoverService2.addEventListener("mouseout", function () {
  changeColorSec2.classList.remove("design");
});

// ------------------ Adding styles on project ---------------------
projectImg.addEventListener("mouseover", function () {
  // console.log("dfg");
  projectImg.style.opacity = "0.1";
  // image.style.backGround = "red";
});
projectImg.addEventListener("mouseout", function () {
  // projectImg.styles.opacity = "0.5";
  // console.log("dfg");
  projectImg.style.opacity = "1";
});

// ------------- making navBar working --------------

right.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e);
  // console.log(e.target);
  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");
    // console.log(id);
    // console.log(typeof(id));
    // console.log("true");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// ------------------ removeing default text from contact me section --------------

const clearText = (e) => (e.target.value = "");
// const setText = (e,message) => e.target.value += message;

message.addEventListener("click", function (e) {
  if (e.target.value === "Your Message ") {
    clearText(e);
  }
});

emial.addEventListener("click", function (e) {
  if (e.target.value === "xyz@gmial.com ") {
    clearText(e);
  }
});

// ------------------ Making NavBar sticky -----------------------
// console.log(navBar.getBoundingClientRect());
// console.log(navBar.getBoundingClientRect().height);

const navBarHeight = navBar.getBoundingClientRect().height;
const stickNavBar = (entries) => {
  console.log(entries); // entries is an array provided by Intersection observer api
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) navBar.classList.add("sticky");
  else navBar.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickNavBar, {
  root: null,
  threshold: 0,
  rootMargin: `-${navBarHeight}px`,
});

headerObserver.observe(mainContent);

// ------------------- Making submit button works ------------------
submit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("e.target",e.target);
  const id = document.querySelector("header");
  console.log("id",id);
  console.log(typeof id);
  // console.log("true");
  id.scrollIntoView({ behavior: "smooth" });
});
