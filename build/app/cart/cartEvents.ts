import {cartStorage} from '../store/store'
import render from '../main'
import {storage} from '../store/store'
let cartEvents=():void=>{

    let get=(id:string):Element=>{
        return document.querySelector(id)
    }
    //---implement all events with cart---//
    get('.cart').addEventListener('click',implementCartEvent);
    
    //---svg-cart onclick show cart---//
    get('.header-navigation__icons-cart').addEventListener('click',implementCartEvent);
    function implementCartEvent(e:any){
        if(e.target.classList.contains('cart-wrapper')){
            e.preventDefault();
            return false
        }
        let productId:any=Object.values((e.target.classList)).find((elem)=>{
            if(Number(elem))
            return elem
        });
        if(e.target.className=='cart-small__header-close'){
            if(cartStorage.smallcartStatus){
                cartStorage.smallcartStatus=false;
            }
        }
        //--svg-cart click show cart---//
        if(e.target.classList.contains('show-main-cart')||e.target.tagName=='path'){
            if(cartStorage.smallcartStatus){
                cartStorage.smallcartStatus=false;
            }
            if(!cartStorage.maincartStatus){
                cartStorage.maincartStatus=true
            }else{
                cartStorage.maincartStatus=false
            }
        }
        //--in small cart event click on button 'view cart'--//
        if(e.target.className=='view-cart'){
            if(cartStorage.smallcartStatus){
                cartStorage.smallcartStatus=false;
            }else{
                cartStorage.maincartStatus=true;
            }
            if(!cartStorage.maincartStatus){
                cartStorage.maincartStatus=true;
            }
        }
        if(e.target.className=='cart-main__close-btn'){
            cartStorage.maincartStatus=false;
        }
        if(e.target.classList.contains('remove-product')){
            console.log('remove product');
            let findElemToRemove:any=storage.store.find((elem:any)=>{
                if(elem.id==productId){
                    return elem
                }
            })
            findElemToRemove.addToCart=false;
            findElemToRemove.inCart=0;
            findElemToRemove.inStore=findElemToRemove.quantity;
            let arrayOfFilteredProducts:any=storage.store.filter((elem)=>{
                if(elem.addToCart)
                return elem
            })
            if(arrayOfFilteredProducts.length==0){
                cartStorage.totalSum=0
            }
        }
if(!e.target.classList.contains('change-product-quantity')){
    render()
}else{
let findElemToChangeQuantity:any=storage.store.find((elem:any)=>{
    if(elem.id==productId){
        return elem
    }
})
findElemToChangeQuantity.changeQuantity=true;
findElemToChangeQuantity.inCart=Number(e.target.value);
findElemToChangeQuantity.inStore=findElemToChangeQuantity.quantity-findElemToChangeQuantity.inCart;
//--- an array of products to add to cart ---//
let arrayAddElemToCart:any=storage.store.filter((elem:any)=>{
    if(elem.addToCart)
    return elem
});
//--- total sum of proudct in cart ---//
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
cartEvents()
export default cartEvents