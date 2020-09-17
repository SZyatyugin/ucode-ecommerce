import storage from '../store/store';


let createStoreElem=():string=>{
    let get=(id:string):Element=>{
        return document.querySelector(id)
    }
    let pagescounter:number[]=new Array(Math.ceil(storage.store.length/6)).fill(null).map((elem,index)=>{return elem=index+1});
    let pages:string=pagescounter.map((elem)=>{
        return `<div class='page p-${elem}'>${elem}</div>`
    }).join('');
    get('.section-assortment__pages-counter').innerHTML=pages;
    if(storage.renderpage===0){
        storage.renderNewPage(1);
    }
    let lastElemeToRender:number=storage.renderpage*6-1;
    let firstElemToRender:number=lastElemeToRender-5;
    if(lastElemeToRender>storage.store.length){
        firstElemToRender=storage.store.length-(lastElemeToRender-storage.store.length)+1;
        lastElemeToRender=storage.store.length-1;
        console.log(lastElemeToRender);
        console.log(firstElemToRender)
    }
    if(firstElemToRender<0){
        firstElemToRender=0
    }
let elem:string=storage.store.map((elem,index)=>{
    if(index>=firstElemToRender && index<=lastElemeToRender ){
        return `
        <div class='section-assortment__goods-card card-${index}'>
        <div class='card-img'>
        <img src='${elem.img}' alt='${elem.company} ${elem.brand}'>
        </div>
        <div class='card-companyname'>
        <p>${elem.company}</p>
        </div>
        <div class='card-productbrand'>
        <p>${elem.brand}</p>
        </div>
        <div class='card-description'>${elem.description}</div>
        <div class='card-price'>The Price is: $${elem.price}</div>
        <div class='card-quantityInStore'>Available in store: ${elem.quantity}</div>
        <input type='button' value="Add to Card" class='card-button'>
        </div>
        `  
    }  
}).join('');
return elem

}
export default createStoreElem;