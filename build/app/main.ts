import createStoreElem from './createStoreElem/createStoreElem';
import mainFilterRender from './filterRender/mainFilterRender';

let render=():void=>{
    let get=(id:string):HTMLElement=>{
        return document.querySelector(id)
    }
    get('.section-assortment__filter').innerHTML=`
    ${mainFilterRender()}
    `
    get('.section-assortment__goods').innerHTML=
    `
    ${createStoreElem()}
    `
}

render()

 export default render;