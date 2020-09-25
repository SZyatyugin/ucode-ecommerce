import { storage } from "../store/store";
import render from "../main";
import { filterArray } from "../store/filter-store";


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
    if (!e.target.classList.contains('custom-checkbox') && e.target.tagName != "LABEL") {
      let filterArrayElement: any = filterArray.find((elem: any) => {
        return Object.values(e.target.classList).find((targetElem) => {
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

      //--- clicked main filter(an object with features, contains innerFilter elements) ---//
      let clickedMainFilterElem: any = filterArray.find((filterElem: any) => {
        return filterElem.innerFilter.find((innerFilterElem: any) => {
          if (e.target.nodeName != "LABEL" && e.target.value.toLowerCase() == innerFilterElem.innerFilterName.toLowerCase())
            return innerFilterElem
        })
      });
      //--- clicked inner filter element (an object with features)---//
      let clickedInnerFilterElem = clickedMainFilterElem.innerFilter.find((innerElem: any) => {
        if (e.target.nodeName != "LABEL" && e.target.value.toLowerCase() == innerElem.innerFilterName.toLowerCase()) {
          return innerElem
        }
      });
      if (!clickedInnerFilterElem.innerFilterStatus) {
        //---click inner filter=true---//
        clickedInnerFilterElem.innerFilterStatus = true;
        storage.showAll = false;
        storage.store.map((elem) => {
          elem.characters.map((charactersElem) => {
            if (charactersElem.toLowerCase() == clickedInnerFilterElem.innerFilterName.toLowerCase()) {
              return elem.show = true
            }
          })
        })
      } else {
        //---click inner filter=false---//
        let arrayOfFilteredProducts: any = storage.store.filter((elem: any) => {
          if (elem.show)
            return elem
        })
        
        clickedInnerFilterElem.innerFilterStatus = false;
        let arrayOfClickedInnerFilterElem: any = filterArray.map((elem) => {
          return elem.innerFilter.filter((elem) => {
            if (elem.innerFilterStatus)
              return elem
          })
        })
        storage.store.map((elem) => {
          elem.show = false;
        })
        if(arrayOfClickedInnerFilterElem.length==0){
          arrayOfClickedInnerFilterElem.map((elem: any) => {
            elem.map((innerElem: any) => {
              storage.store.map((elemStorage: any) => {
                elemStorage.characters.map((charactersElem: any) => {
                  if (charactersElem.toLowerCase() == innerElem.innerFilterName.toLowerCase()) {
                    elemStorage.show = true
                  }
                })
              })
            })
          })
        }else{
          console.log(arrayOfClickedInnerFilterElem);
          console.log(arrayOfFilteredProducts)
          arrayOfFilteredProducts.map((elem:any)=>{
            arrayOfClickedInnerFilterElem.map((elemFilter:any)=>{
              elem.characters.map((charactersElem:any)=>{
                if(charactersElem.toLowerCase()==elemFilter.innerFilterName.toLowerCase()){
                  elem.show=true
                }
              })
            })
          })
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
