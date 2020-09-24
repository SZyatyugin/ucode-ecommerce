import {cartStorage} from '../store/store'
import render from '../main'

let cartEvents=():void=>{

    let get=(id:string):Element=>{
        return document.querySelector(id)
    }
    //---implement all events with cart---//
    get('.cart').addEventListener('click',implementCartEvent);
    get('.show-main-cart').addEventListener('click',implementCartEvent);
    get('.header-navigation__icons-cart').addEventListener('click',implementCartEvent);
    function implementCartEvent(e:any){
        console.log(e)
        if(e.target.className=='cart-small__header-close'){
            if(cartStorage.smallcartStatus){
                cartStorage.smallcartStatus=false;
            }
        }
        if(e.target.className=='show-main-cart'||e.target.className=='view-cart'){
            console.log('in cart')
            if(cartStorage.smallcartStatus){
                cartStorage.smallcartStatus=false;
            }else{
                cartStorage.maincartStatus=true;
            }
            if(!cartStorage.maincartStatus){
                cartStorage.maincartStatus=true
            }
        }
if(e.target.className!='change-product-quantity'){
    render()
}else{
    console.log(e)
}
    

       
}

    
}
cartEvents()
export default cartEvents