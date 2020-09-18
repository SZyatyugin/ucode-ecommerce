import storage from '../store/store';
import render from '../main';

let filterCreate = (): void => {
    let get = (id: string): Element => {
        return document.querySelector(id)
    }
    let getAll = (id: string): any => {
        return document.querySelectorAll(id)
    }

    get('.selected-quantity').innerHTML = `${storage.store.length}`;
    get('#sort-assortment').addEventListener('change', sortSelectionCheck);

    function sortSelectionCheck(e: any): void {
        //sort by highest price or lower price

        if (e.target.value.toLowerCase() === 'highest price') {
            storage.sortByHighestPrice();

        } else if (e.target.value.toLowerCase() === 'lowest price') {
            storage.sortByLowestPrice();

        }
        get('.selected-quantity').innerHTML = `${storage.store.length}`;

        render()
    }
    Object.values(getAll('.page')).forEach((elem: Element) => {
        elem.addEventListener('click', changepage);
    })
    function changepage(e: any) {
        //change current page
        storage.renderpage = Number(e.target.innerText);

        render()
    }
    Object.values(getAll('.section-assortment__filter')).forEach((elem: Element) => {
        elem.addEventListener('click', showfilterelem);
    })
    function showfilterelem(e: any) {
        //show or hide elements in the filter

        let element: any = Object.values(e.target.classList).find((elem: Element, index: number) => {
            if (index == 0) {
                return elem
            }
        });
        console.log(element)
        if(element!='custom-checkbox'){
            let elementClass=element.replace(/-/g,'')
           console.log( Object.values(getAll(`.${element}`)))
                Object.values(getAll(`.${element}`)).map((elem: Element) => {
                    if (elem.classList.contains("clicked")) {
                        console.log(23)
                        storage.changeFilterStatus(elementClass,false)
                        console.log(storage)
                        
                    } else {
                        console.log(32)
                        console.log(storage)
                    storage.changeFilterStatus(elementClass,true)
                    
                    }
                })
        }
        
        render()
    }

    Object.values(getAll('.custom-checkbox')).forEach((elem: Element) => {
        elem.addEventListener('change', sortProductsByFilter);
    })
    function sortProductsByFilter(e:any) {
        
        if(e.target.classList.contains('checked')){
            console.log(1)
            e.target.classList.remove('checked');
            storage.store.map((elem)=>{
                elem.characters.map((charactersElem)=>{
                    if(e.target.value==charactersElem)
                    return elem.show=false
                })
             })
             render();
            e.preventDefault();
            return false
        }else{
            console.log(2)
            e.target.classList.add('checked');
            storage.store.map((elem)=>{
            return elem.show=false
            })
            storage.store.map((elem)=>{
                elem.characters.map((charactersElem)=>{
                    if(e.target.value==charactersElem)
                 return   elem.show=true
                    
                })
            })
            render()
        }
    }
}
export default filterCreate