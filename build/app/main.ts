import createStoreElem from './createStoreElem/createStoreElem';
import mainFilterRender from './filterRender/mainFilterRender';
import createBestSellProduct from './bestsellProduct/bestsellProduct';
import createCart from './cart/createCart';
let render=():void=>{
    let get=(id:string):HTMLElement=>{
        return document.querySelector(id)
    }
    get('.section-card__bestsell').innerHTML=
    `${createBestSellProduct()}`
    get('.section-assortment__filter').innerHTML=`
    ${mainFilterRender()}
    `
    get('.section-assortment__goods').innerHTML=
    `
    ${createStoreElem()}
    `
    get('.cart').innerHTML=`
    ${createCart()}`
}

render()

 export default render;