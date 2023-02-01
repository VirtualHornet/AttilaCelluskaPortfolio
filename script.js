/*========typing animation ======== */
let typed = new Typed(".typing", {
    strings:["","Web Designer","Web Developer","Software Engineer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});
/*========SideBar animation ======== */

const nav = document.querySelector(".nav");
const navList= nav.querySelectorAll("li");
const totalNavlist = navList.length;
const allSection = document.querySelectorAll("section");
const totalSection = allSection.length;
for(let i = 0; i < totalNavlist; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let i = 0; i< totalSection;i++){
            allSection[i].classList.remove("back-section");
        }
        for(let j = 0; j< totalNavlist;j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth<1200){
            navSectionTogglerBtn();
        }
    })
}
function showSection(element){
    for(let i = 0; i< totalSection;i++){
        allSection[i].classList.remove("active");
    }
    const href=element.getAttribute("href").split("#");
    target = href[1];
    //console.log(target);
    document.querySelector("#"+target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler");
const sideBar = document.querySelector(".sidebar");

navTogglerBtn.addEventListener("click",() =>{
    navSectionTogglerBtn();
})

function navSectionTogglerBtn(){
    sideBar.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i = 0; i < totalSection;i++){
        allSection[i].classList.toggle("open");
    }
}
