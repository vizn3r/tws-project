const navIDs = ["nhme", "nint", "nsch", "nabt"];
const contIDs = ["cgms", "celk", "cair", "chac"];
const idolClass = ["yi-lan-ma", "john-xina", "linus"];

const navBar = document.getElementById("nav");
const content = document.getElementById("content");
const idols = document.getElementById("idols");
const w = document.getElementById("wrapper2");

navBar.addEventListener("mouseleave", (e) => (w.style.backgroundImage = "url(/img/n.png)"));
navIDs.forEach((id) => document.getElementById(id).addEventListener("mouseover", (e) => (w.style.backgroundImage = `url(/img/${id}.gif)`)));

content.addEventListener("mouseleave", (e) => (w.style.backgroundImage = "url(/img/n.png)"));
contIDs.forEach((id) => document.getElementById(id).addEventListener("mouseover", (e) => (w.style.backgroundImage = `url(/img/${id}.gif)`)));

idols.addEventListener("mouseleave", (e) => (w.style.backgroundImage = "url(/img/n.png)"));
idolClass.forEach((c) => {
    const els = document.getElementsByClassName(c);
    for (let i = 0; i < els.length; i++) els[i].addEventListener("mouseover", (e) => (w.style.backgroundImage = `url(/img/${c}.gif)`));
});
