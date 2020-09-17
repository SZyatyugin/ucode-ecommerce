import storage from '../store/store';
import render from '../main';

let filterCreate=():void=>{
let get=(id:string):Element=>{
    return document.querySelector(id)
}
let getAll=(id:string):any=>{
    return document.querySelectorAll(id)
}

get('.selected-quantity').innerHTML=`${storage.store.length}`;
get('#sort-assortment').addEventListener('change', sortSelectionCheck);

function sortSelectionCheck(e:any):void{
    console.log(e)
    console.log(getAll('.page'))
if(e.target.value.toLowerCase()==='highest price'){
    storage.sortByHighestPrice();
    
}else if(e.target.value.toLowerCase()==='lowest price'){
    storage.sortByLowestPrice();
    
}
get('.selected-quantity').innerHTML=`${storage.store.length}`;

render()
}
Object.values(getAll('.page')).forEach((elem:Element)=>{
    elem.addEventListener('click',changepage);
})
function changepage(e:any){
storage.renderpage=Number(e.target.innerText);
console.log(storage);
render()
}

}
export default filterCreate