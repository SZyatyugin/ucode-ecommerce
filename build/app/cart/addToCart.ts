import {cartStorage,storage} from '../store/store';
import render from '../main';

let addToCart=():void=>{
let getAll=(id:string):any=>{
    return document.querySelectorAll(id)
}
Object.values(getAll('.section-assortment__goods')).forEach((elem:any)=>{
    elem.addEventListener('click',addtocart);
})
//---add product to cart ---//
function addtocart(e:any){
let buttonId:any=Object.values(e.target.classList).find((elem:any)=>{
return Number(elem)
})
let productAddToCart:any=storage.store.find((elem)=>{
    if(elem.id==buttonId)
    return elem
})
productAddToCart.addToCart=true;
cartStorage.smallcartStatus=true;
if(productAddToCart.inStore!=0){
    productAddToCart.inStore-=1;
    }
  console.log(productAddToCart.inStore)
render()
}

}
addToCart()