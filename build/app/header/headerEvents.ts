let headerEvents=():void=>{

let get=(id:string):Element=>{
    return document.querySelector(id)
}
get('.header-navigation__menu').addEventListener('click',scrollToElement);
get('.header-navigation__menu-button').addEventListener('click',showMenu);
get('.header-button-close').addEventListener('click',closeMenu);
window.addEventListener('scroll',showNavigation);

//--- scroll to the assortment ---//
function scrollToElement(e:any):void{
if(e.target.textContent=='Coffee'){
 get('.section-assortment__info').scrollIntoView({block:'start',behavior:'smooth'})
} 
}
//--- show the meny onclick event ---//
function showMenu(e:any):void{
if(get('.header-navigation__menu-button').classList.contains('active')){
    get('.header-navigation__menu-button').classList.remove('active');
}else{
    get('.header-navigation__menu-button').classList.add('active');
   
}
}
//--- close the menu onclick event on button ---//
function closeMenu():void{
    if(get('.header-navigation__menu-button').classList.contains('active')){
        get('.header-navigation__menu-button').classList.remove('active');
    }
}
function showNavigation(e:any):void{
    if(pageYOffset>100){
    get('.header-navigation').classList.add('active');
    }else{
        get('.header-navigation').classList.remove('active');
        get('.header-navigation__menu-button').classList.remove('active');
    }
}
}
headerEvents()
export default headerEvents