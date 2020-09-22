import storage from "../store/store";
import render from "../main";
import {
  roastlevel,
  price,
  country,
  region,
  filterArray,
} from "../store/filter-store";
import mainFilterRender from "../filterRender/mainFilterRender";

let filterImplementation = (): void => {
  let get = (id: string): Element => {
    return document.querySelector(id);
  };
  let getAll = (id: string): any => {
    return document.querySelectorAll(id);
  };

  get(".selected-quantity").innerHTML = `${storage.store.length}`;
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

  Object.values(getAll(".page")).forEach((elem: Element) => {
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
  
  console.log(e)
  
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
        console.log('click custom-checkbox')
          console.log(e.target.value)
          console.log(filterArrayElement)
          console.log(e.currentTarget)
        }
    render()
    };
  
Object.values(getAll(".custom-checkbox")).forEach((elem: Element) => {
    elem.addEventListener("change", sortProductsByFilter);
  });
  function sortProductsByFilter(e: any) {
      console.log(e.target.value)
    if (e.target.classList.contains("checked")) {
      console.log(1);
      e.target.classList.remove("checked");
      storage.store.map((elem) => {
        elem.characters.map((charactersElem) => {
          if (e.target.value == charactersElem) return (elem.show = false);
        });
      });
      e.preventDefault();
      return false;
    } else {
      console.log(2);
      e.target.classList.add("checked");
      storage.store.map((elem) => {
        return (elem.show = false);
      });
      storage.store.map((elem) => {
        elem.characters.map((charactersElem) => {
          if (e.target.value == charactersElem) return (elem.show = true);
        });
      });
    }
  }
};
filterImplementation();
