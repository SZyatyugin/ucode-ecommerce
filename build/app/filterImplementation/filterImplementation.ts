import storage from "../store/store";
import render from "../main";
import {
  roastlevel,
  price,
  country,
  region,
  filterArray,
} from "../store/filter-store";


let filterImplementation = (): void => {
  let get = (id: string): Element => {
    return document.querySelector(id);
  };
  let getAll = (id: string): any => {
    return document.querySelectorAll(id);
  };

  get(".selected-quantity").innerHTML = `${storage.store.length}`;
  get('.selected-quantity').innerHTML=`${storage.store.length}`
  get("#sort-assortment").addEventListener("change", sortSelectionCheck);

  function sortSelectionCheck(e: any): void {
    //----sort by highest price or lower price----//

    if (e.target.value.toLowerCase() === "highest price") {
      storage.sortByHighestPrice();
    } else if (e.target.value.toLowerCase() === "lowest price") {
      storage.sortByLowestPrice();
    }
    get(".selected-quantity").innerHTML = `${storage.store.length}`;

    render();
  }

  Object.values(getAll(".section-assortment__pages-counter")).forEach((elem: Element) => {
    elem.addEventListener("click", changepage);
  });
  function changepage(e: any) {
    //----change current page----//
    storage.renderpage = Number(e.target.innerText);

    render();
  }
  Object.values(getAll(".arrow")).forEach((elem: Element) => {
    elem.addEventListener("click", changePageOnArrowClick);
  });
  function changePageOnArrowClick(e: any) {
    //----change current page arrow back or forward onclick----//
    let numberOfPages=Object.values(getAll('.page')).length;
    console.log(numberOfPages)
    if (e.target.classList.contains("back")) {
      storage.renderpage -= 1;
      if(storage.renderpage<0){
        storage.renderpage=1
      }
    }
    if (e.target.classList.contains("forward")) {
      storage.renderpage += 1;
      if(storage.renderpage>numberOfPages){
        storage.renderpage=3;
      }
    }
    render();
  }

  Object.values(getAll(".section-assortment__filter")).forEach((elem:Element)=>{
    elem.addEventListener("click", showfilterelem);
  })
  
  function showfilterelem(e: any) {
    //----show or hide elements in the filter----//

      let clickedElemClassName: any = Object.values(e.target.classList).find(
        (elemClicked: Element) => {
          return filterArray.map((filterArrayElem: any) => {
            if (elemClicked == filterArrayElem.filterClassName)
              return filterArrayElem;
          });
        }
      );
        let filterArrayElement: any = filterArray.find((elem) => {
          if (elem.filterClassName == clickedElemClassName) {
            return elem;
          }
        });
        
        if (clickedElemClassName!='custom-checkbox') {
          
          if (
            !filterArrayElement.filterClicked &&
            !filterArrayElement.filterStatus
          ) {
            
            filterArrayElement.filterStatus = true;
           
          }
          if (filterArrayElement.filterClicked) {
            
            filterArrayElement.filterStatus = false;
            filterArrayElement.filterClicked = true;
          }
          if (!filterArrayElement.filterClicked) {
            filterArrayElement.filterClicked = true;
          } else {
            filterArrayElement.filterClicked = false;
          }
        }else if(clickedElemClassName=='custom-checkbox') {
        
        //--- clicked main filter(an object with features, contains innerFilter elements) ---//
          let clickedMainFilterElem:any=filterArray.find((filterElem:any)=>{
            return filterElem.innerFilter.find((innerFilterElem:any)=>{
              if(e.target.value.toLowerCase()==innerFilterElem.innerFilterName.toLowerCase())
              return innerFilterElem
            })
          });
          //--- clicked inner filter element (an object with features)---//
          let clickedInnerFilterElem=clickedMainFilterElem.innerFilter.find((innerElem:any)=>{
            if(e.target.value.toLowerCase()==innerElem.innerFilterName.toLowerCase()){
              return innerElem
            }
          });
          
          
          if(!clickedInnerFilterElem.innerFilterStatus){
            clickedInnerFilterElem.innerFilterStatus=true;
             //---an array of clicked inner filter elements---//
            let arrayOfClickedInnerFilterElem:any=filterArray.map((elem)=>{
              return elem.innerFilter.filter((elem)=>{
                if(elem.innerFilterStatus)
                return elem
              })
             })
             console.log(arrayOfClickedInnerFilterElem)
              storage.showAll=false;
              console.log('for first time')
              storage.store.map((elem)=>{
                elem.characters.map((charactersElem)=>{
                  if(charactersElem.toLowerCase()==clickedInnerFilterElem.innerFilterName.toLowerCase()){
                    return elem.show=true
                  }
                })
              })
            }else{
              
            clickedInnerFilterElem.innerFilterStatus=false;
            let arrayOfClickedInnerFilterElem:any=filterArray.map((elem)=>{
              return elem.innerFilter.filter((elem)=>{
                if(elem.innerFilterStatus)
                return elem
              })
             })
             storage.store.map((elem)=>{
               elem.show=false;
             })
             arrayOfClickedInnerFilterElem.map((elem:any)=>{
               elem.map((innerElem:any)=>{
                 storage.store.map((elemStorage:any)=>{
                   elemStorage.characters.map((charactersElem:any)=>{
                     if(charactersElem.toLowerCase()==innerElem.innerFilterName.toLowerCase()){
                      elemStorage.show=true
                     }
                   })
                 })
               })
             })
             //---an array of filtered goods,according to inner filters---//
          let filteredElemOfStorage:any=storage.store.filter((elem)=>{
            if(elem.show)
            return elem
          })  
            if(filteredElemOfStorage.length==0){
              storage.showAll=true
            }
          }
          let totalQuantityOfGoods:any=storage.store.filter((elem)=>{
            if(elem.show)
            return elem
          })
          get('.selected-quantity').innerHTML=`${totalQuantityOfGoods.length}`
          if(storage.showAll){
            get('.selected-quantity').innerHTML=`${storage.store.length}`
          }
        }
    render()
    };
  
};
filterImplementation();
