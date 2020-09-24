
import {roastlevel,price,country,region} from '../store/filter-store'

let mainFilterRender=():string=>{
    
return`
<ul>
<li class='filter__roast-level roast-level ${roastlevel.filterStatus?'clicked':''}'>
    <div class='filter-header '>
        <div class='roast-level ${roastlevel.filterStatus?'clicked':''}'>Roast Level</div>
        <div class='roast-level filter-close ${roastlevel.filterStatus?'clicked':''}'></div>
    </div>
    <ul>
    ${roastlevel.innerFilter.map((elem)=>{
      return  `<li><input type="checkbox" name="${elem.innerFilterId}" id="${elem.innerFilterId}" value='${elem.innerFilterName}' class='custom-checkbox ${elem.innerFilterStatus?'checked':''}'>
        <label for="${elem.innerFilterId}">${elem.innerFilterName}</label></li>`
    }).join('')}
    </ul>
</li>
<li class='filter__price-level price-level ${price.filterStatus?'clicked':''}'>
    <div class='filter-header'>
        <div class='price-level ${price.filterStatus?'clicked':''}'>Price</div>
        <div class='price-level filter-close ${price.filterStatus?'clicked':''}'></div>
    </div>
    <ul>
    ${price.innerFilter.map((elem)=>{
        return  `<li><input type="checkbox" name="${elem.innerFilterId}" id="${elem.innerFilterId}" value='${elem.innerFilterName}' class='custom-checkbox ${elem.innerFilterStatus?'checked':''}'>
          <label for="${elem.innerFilterId}">${elem.innerFilterName}</label></li>`
      }).join('')}
    </ul>
</li>
<li class='filter__region-level region-level ${region.filterStatus?'clicked':''}'>
    <div class='filter-header'>
        <div class='region-level ${region.filterStatus?'clicked':''}'>Region</div>
        <div class='region-level filter-close ${region.filterStatus?'clicked':''}'></div>
    </div>
    <ul>
    ${region.innerFilter.map((elem)=>{
        return  `<li><input type="checkbox" name="${elem.innerFilterId}" id="${elem.innerFilterId}" value='${elem.innerFilterName}' class='custom-checkbox ${elem.innerFilterStatus?'checked':''}'>
          <label for="${elem.innerFilterId}">${elem.innerFilterName}</label></li>`
      }).join('')}
    </ul>
</li>
<li class='filter__country-level country-level ${country.filterStatus?'clicked':''}'>
    <div class='filter-header '>
        <div class='country-level ${country.filterStatus?'clicked':''}'>Country</div>
        <div class='country-level filter-close ${country.filterStatus?'clicked':''}'></div>
    </div>
    <ul>
    ${country.innerFilter.map((elem)=>{
        return  `<li><input type="checkbox" name="${elem.innerFilterId}" id="${elem.innerFilterId}" value='${elem.innerFilterName}' class='custom-checkbox ${elem.innerFilterStatus?'checked':''}'>
          <label for="${elem.innerFilterId}">${elem.innerFilterName}</label></li>`
      }).join('')}
    </ul>
</li>
</ul>`
    
}
export default mainFilterRender