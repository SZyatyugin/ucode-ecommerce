import createStoreElem from './createStoreElem/createStoreElem';
import filterCreate from './filterCreate/filterCreate';

let render=():void=>{
    let get=(id:string):HTMLElement=>{
        return document.querySelector(id)
    }
    get('.section-assortment__goods').innerHTML=
    `
    ${createStoreElem()}
    `
    filterCreate()
}
render()
 export default render;