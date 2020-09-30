import {storage} from '../store/store';


let createStoreElem=():string=>{
    
    let get=(id:string):Element=>{
        return document.querySelector(id)
    }

    if(storage.renderpage===0){
        storage.renderNewPage(1);
    }
    let filteredStoreElems:any=storage.store.filter((elem)=>{
        if(elem.show)
        return elem
    })
    let pagescounter:number[];
    let store:any;
    
        if(filteredStoreElems.length==0){
            store=storage.store;
        pagescounter=new Array(Math.ceil(storage.store.length/6)).fill(null).map((elem:any,index)=>{return elem=index+1});
        }
       else{
        store=filteredStoreElems;
        pagescounter=new Array(Math.ceil(filteredStoreElems.length/6)).fill(null).map((elem:any,index)=>{return elem=index+1});
       }
    
    
    let pages:string=pagescounter.map((elem)=>{
        return `<div class='page p-${elem}'>${elem}</div>`
    }).join('');
    get('.section-assortment__pages-counter').innerHTML=pages;
    let lastElemeToRender:number=storage.renderpage*6-1;
    let firstElemToRender:number=lastElemeToRender-5;
    if(lastElemeToRender>storage.store.length){
        firstElemToRender=storage.store.length-(lastElemeToRender-storage.store.length)+1;
        lastElemeToRender=storage.store.length-1;
    }
    if(firstElemToRender<0){
        firstElemToRender=0
    }
    
let elem:string=store.map((elem:any,index:number)=>{
    if(index>=firstElemToRender && index<=lastElemeToRender && (elem.show||storage.showAll)){
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
        <div class='card-quantityInStore'>Available in store: ${elem.inStore}</div>
        <input type='button' value="${elem.inStore!=0?'ADD TO CART':'SOLD OUT!'}" class='card-button ${elem.id}' ${elem.inStore!=0?"":'disabled'}>
        </div>
        `  
    }  
}).join('');
return elem

}
export default createStoreElem;