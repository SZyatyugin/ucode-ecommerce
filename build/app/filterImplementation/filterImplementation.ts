import { storage } from "../store/store";
import render from "../main";
import { filterArray } from "../store/filter-store";
import { EvalSourceMapDevToolPlugin } from "webpack";


let filterImplementation = (): void => {
  let get = (id: string): Element => {
    return document.querySelector(id);
  };
  let getAll = (id: string): any => {
    return document.querySelectorAll(id);
  };

  get(".selected-quantity").innerHTML = `${storage.store.length}`;
  get('.selected-quantity').innerHTML = `${storage.store.length}`;
  get('.section-assortment__navigation-section-1-clear').addEventListener('click', clear);

  //---clear filter---//
  function clear(): void {
    storage.showAll = true;
    storage.store.map((elem) => {
      elem.show = false;
    });
    filterArray.map((elem) => {
      elem.filterStatus = false
      elem.innerFilter.map((innerElem) => {
        innerElem.innerFilterStatus = false
      });
    });
    get('.selected-quantity').innerHTML = `${storage.store.length}`;
    render()
  }
  get("#sort-assortment").addEventListener("change", sortSelectionCheck);

  //----sort by highest price or lower price----//

  function sortSelectionCheck(e: any): void {
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

  //----change current page----//

  function changepage(e: any) {
    storage.renderpage = Number(e.target.innerText);
    render();
  }
  Object.values(getAll(".arrow")).forEach((elem: Element) => {
    elem.addEventListener("click", changePageOnArrowClick);
  });

  //----change current page arrow back or forward onclick----//

  function changePageOnArrowClick(e: any) {
    let numberOfPages = Object.values(getAll('.page')).length;
    if (e.target.classList.contains("back")) {
      storage.renderpage -= 1;
      if (storage.renderpage < 0) {
        storage.renderpage = 1
      }
    }
    if (e.target.classList.contains("forward")) {
      storage.renderpage += 1;
      if (storage.renderpage > numberOfPages) {
        storage.renderpage = 3;
      }
    }
    render();
  }

  Object.values(getAll(".section-assortment__filter")).forEach((elem: Element) => {
    elem.addEventListener("click", showfilterelem);
  })

  //----show or hide elements in the filter----//

  function showfilterelem(e: any) {
    if (e.target.nodeName == 'LABEL') {
      return false
    }
    if (!e.target.classList.contains('custom-checkbox')) {
      let filterArrayElement: any = filterArray.find((elem: any) => {

        return Object.values(e.target.classList).find((targetElem: any) => {
          if (targetElem == elem.filterClassName)
            return elem
        })
      });
      if (!filterArrayElement.filterStatus) {
        filterArrayElement.filterStatus = true;
      } else {
        filterArrayElement.filterStatus = false;
      }
    } else {

      console.log('innerfilter')

      //--- clicked main filter(an object with features, contains innerFilter elements) ---//
      let clickedMainFilterElem: any = filterArray.find((filterElem: any) => {
        return filterElem.innerFilter.find((innerFilterElem: any) => {
          if (e.target.value.toLowerCase() == innerFilterElem.innerFilterName.toLowerCase())
            return innerFilterElem
        })
      });
      //--- clicked inner filter element (an object with features)---//
      let clickedInnerFilterElem = clickedMainFilterElem.innerFilter.find((innerElem: any) => {
        if (e.target.value.toLowerCase() == innerElem.innerFilterName.toLowerCase()) {
          return innerElem
        }
      });
      if (!clickedInnerFilterElem.innerFilterStatus) {
        //---click inner filter=true---//
        clickedInnerFilterElem.innerFilterStatus = true;
        storage.showAll = false;
        //---an array of clicked inner filters ---//
        let arrayOfClickedInnerFilterElem: any = filterArray.map((elem) => {
          return elem.innerFilter.filter((elem) => {
            if (elem.innerFilterStatus)
              return elem
          })
        }).filter((elem) => { if (elem.length != 0) return elem });
        //---an array of filtered products---//
        let arrayOfClickedMainFilters: any = filterArray.filter((elem)=>{
          if(elem.filterStatus)
          return elem
        });
        let arrayOfProductsFiltered=arrayOfClickedInnerFilterElem.filter((elemFilter:any,index:number)=>{
          
          if(index==0){

              return storage.store.filter((elem:any)=>{
                if(elem.characters.includes(elemFilter.innerFilterName.toLowerCase())){
                  return elem
                }
              })
            }
          })
       
        
        if (arrayOfClickedInnerFilterElem.length == 1) {
          console.log('one inner filter turned');
          
          //--if only one filter turned on, takes storage as basis ---//
         storage.store.map((elem) => {
            elem.characters.map((charactersElem) => {
              if (charactersElem.toLowerCase() == clickedInnerFilterElem.innerFilterName.toLowerCase()) {
                return elem.show = true
              }
            })
          })
        } else {
          console.log('several inner filters turned');
          console.log(arrayOfProductsFiltered)
        
           //--- an array of filtered products according to arrayOfClickedInnerFilterElem ---//
      let arrayOfProductsToShow = arrayOfProductsFiltered.map((product: any) => {
            
        return arrayOfClickedInnerFilterElem.map((mainFilter: any) => {
           return mainFilter.map((innerFilter:any)=>{
             if (product.characters.includes(innerFilter.innerFilterName.toLowerCase())) {
               console.log(product.characters.includes(innerFilter.innerFilterName.toLowerCase()));
               console.log(product)
               product.show=true
             }else{
              console.log(product.characters.includes(innerFilter.innerFilterName.toLowerCase()));
              console.log(product)
               product.show=false
             }
           }).find((elem:any)=>{if(elem!='undefined') return elem});
         }).find((elem:any)=>{if(elem!='undefined') return elem});
       }).filter((elem:any)=>{if(elem!='undefined') return elem}).map((elem:any)=>{
        return elem
       })
       console.log(arrayOfClickedInnerFilterElem)
       
         console.log(arrayOfProductsToShow)
         console.log(storage.store)
        }
      } else {
        console.log('turn off filter');
        
        //---click inner filter=false---//
        //---an array of filtered products---//
        clickedInnerFilterElem.innerFilterStatus = false;
            //---an array of clicked inner filters ---//
            let arrayOfClickedInnerFilterElem: any = filterArray.map((elem) => {
              return elem.innerFilter.filter((elem) => {
                if (elem.innerFilterStatus)
                  return elem
              })
            }).filter((elem) => { if (elem.length != 0) return elem });
        console.log(storage.store)
        console.log(storage.store.filter((elem:any)=>{if(elem.show)return elem}))
        if (arrayOfClickedInnerFilterElem.length == 0) {
          console.log('no filters turned on')
          //---all filters turned off---//
          storage.showAll=true
          storage.store.map((elem) => {
              elem.show = false
          })
        } else {
          console.log('tunr off one by one');
          storage.store.map((elem)=>{
            return elem.show=false
          })
            //--- an array of clicked filter element ---//
          let arrayOfProductsToShow = storage.store.map((product: any) => {
            
              return arrayOfClickedInnerFilterElem.map((mainFilter: any) => {
                 return mainFilter.map((innerFilter:any)=>{
                   if (product.characters.includes(innerFilter.innerFilterName.toLowerCase())) {
                     return product
                   }
                 }).find((elem:any)=>{if(elem!='undefined') return elem});
               }).find((elem:any)=>{if(elem!='undefined') return elem});
             }).filter((elem)=>{if(elem!='undefined') return elem}).map((elem)=>{
               elem.show=true
             })
             
        console.log(storage.store)
        console.log(storage.store.filter((elem:any)=>{if(elem.show)return elem}))
      }
      //---an array of filtered goods,according to inner filters---//
      let filteredElemOfStorage: any = storage.store.filter((elem) => {
        if (elem.show)
          return elem
      })
      if (filteredElemOfStorage.length == 0) {
        storage.showAll = true
      }
    }
    let totalQuantityOfGoods: any = storage.store.filter((elem) => {
      if (elem.show)
        return elem
    })
    get('.selected-quantity').innerHTML = `${totalQuantityOfGoods.length}`
    if (storage.showAll) {
      get('.selected-quantity').innerHTML = `${storage.store.length}`
    }
  }
  render()
};

};
filterImplementation();
