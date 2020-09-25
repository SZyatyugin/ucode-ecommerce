import {cartStorage,storage} from '../store/store';
import render from '../main';

let addToCart=():void=>{
let getAll=(id:string):any=>{
    return document.querySelectorAll(id)
}
Object.values(getAll('.section-assortment__goods')).forEach((elem:any)=>{
    elem.addEventListener('click',addtocart);
})
Object.values(getAll('.section-card__bestsell')).forEach((elem:any)=>{
elem.addEventListener('click',addtocart);
})
//---add product to cart ---//
function addtocart(e:any){
    if(e.target.classList.contains('card-button')){
        let buttonId:any=Object.values(e.target.classList).find((elem:any)=>{
            return Number(elem)
            })
            let productAddToCart:any=storage.store.find((elem)=>{
                if(elem.id==buttonId)
                return elem
            })
            productAddToCart.addToCart=true;
            if(!cartStorage.maincartStatus){
            cartStorage.smallcartStatus=true;
            }
            
            if(productAddToCart.inStore!=0){
                productAddToCart.inStore-=1;
                productAddToCart.inCart+=1;
                }
                let arrayAddElemToCart:any=storage.store.filter((elem:any)=>{
                    if(elem.addToCart)
                    return elem
                });
                let totalSum:any=arrayAddElemToCart.map((elem:any)=>{
                    return elem.price*elem.inCart;
                }).reduce((a:number,b:number)=>{
                    return a+b
                })
                cartStorage.totalSum=totalSum;
            render()
            }
    }
}
addToCart()