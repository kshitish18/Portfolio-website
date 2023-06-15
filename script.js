let menuVisible = false;
//function that hides or shows the menu
function showHideMenu(){
    if(menuVisible){
        document.getElementByIde("nav").classList = "";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function selectionr(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectHobilidades(){
    var skills =document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let hobilidades = document.getElementsByClassName("progress");
        habilidades[0].classList.add("javscript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("tailwind");
        habilidades[3].classList.add("MySQL");
        habilidades[4].classList.add("photoshop");
        habilidades[5].classList.add("communication");
        habilidades[6].classList.add("teamwork");
        habilidades[7].classList.add("creativity");
        habilidades[8].classList.add("dedication");
        habilidades[9].classList.add("management");
    }
}

window.onscroll = function(){
    efectHobilidades();
}