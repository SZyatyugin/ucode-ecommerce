let headerEvents=():void=>{

let get=(id:string):Element=>{
    return document.querySelector(id)
}
get('.header-navigation__menu').addEventListener('click',scrollToElement);

function scrollToElement(e:any):void{
if(e.target.textContent=='Coffee'){
 get('.section-assortment__info').scrollIntoView({block:'start',behavior:'smooth'})
} 
}
}
headerEvents()
export default headerEvents