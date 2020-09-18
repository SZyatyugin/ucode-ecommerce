import storage from '../store/store'

let filterRender=():string=>{
return`
<ul>
<li class='filter__roast-level roast-level ${storage.filterStatus.roastlevel?'clicked':''}'>
    <div class='filter-header '>
        <div class='roast-level ${storage.filterStatus.roastlevel?'clicked':''}'>Roast Level</div>
        <div class='roast-level filter-close ${storage.filterStatus.roastlevel?'clicked':''}'></div>
    </div>
    <ul>
        <li><input type="checkbox" name="light" id="light" value='light' class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="light">Light</label></li>
        <li><input type="checkbox" name="light-medium" id="light-medium" value='light-medium'
                class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="light-medium">Light-Medium</label></li>
        <li><input type="checkbox" name="medium" id="medium" value='medium' class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="medium">medium</label></li>
        <li><input type="checkbox" name="medium-dark" id="medium-dark" value='medium-dark'
                class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="medium-dark">medium-dark</label></li>
        <li><input type="checkbox" name="dark" id="dark" value='dark' class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="dark">Dark</label></li>
    </ul>
</li>
<li class='filter__price-level price-level ${storage.filterStatus.pricelevel?'clicked':''}'>
    <div class='filter-header'>
        <div class='price-level ${storage.filterStatus.pricelevel?'clicked':''}'>Price</div>
        <div class='price-level filter-close ${storage.filterStatus.pricelevel?'clicked':''}'></div>
    </div>
    <ul>
        <li><input type="checkbox" name="less-than-$15" id="less-than-$15" value='less than $15'
                class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="less-than-$15">Less than $15</label></li>
        <li><input type="checkbox" name="$15-$18" id="$15-$18" value='$15-$18'
                class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="$15-$18">$15-$18</label></li>
        <li><input type="checkbox" name="$18-$22" id="$18-$22" value='$18-$22'
                class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="$18-$22">$18-$22</label></li>
        <li><input type="checkbox" name="more-than-$22" id="more-than-$22" value='more than $22'
                class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="more-than-$22">More than $22</label></li>
    </ul>
</li>
<li class='filter__region-level region-level ${storage.filterStatus.regionlevel?'clicked':''}'>
    <div class='filter-header'>
        <div class='region-level${storage.filterStatus.regionlevel?'clicked':''}'>Region</div>
        <div class='region-level filter-close ${storage.filterStatus.regionlevel?'clicked':''}'></div>
    </div>
    <ul>
        <li><input type="checkbox" name="africa" id="africa" value='africa' class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="africa">Africa</label></li>
        <li><input type="checkbox" name="asia" id="asia" vaue='asia' class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="asia">Asia</label></li>
        <li><input type="checkbox" name="central-america" id="central-america"
                value='central america' class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="central-america">Central America</label></li>
        <li><input type="checkbox" name="north-america" id="north-america" value='north america'
                class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="north-america">North America</label></li>
        <li><input type="checkbox" name="south-america" id="south-america" value='south america'
                class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="south-america">South America</label></li>
    </ul>
</li>
<li class='filter__country-level country-level${storage.filterStatus.countrylevel?'clicked':''}'>
    <div class='filter-header '>
        <div class='country-level ${storage.filterStatus.countrylevel?'clicked':''}'>Country</div>
        <div class='country-level filter-close ${storage.filterStatus.countrylevel?'clicked':''}'></div>
    </div>
    <ul>
        <li><input type="checkbox" name="brazil" id="brazil" value='brazil' class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="brazil">Brazil</label></li>
        <li><input type="checkbox" name="colombia" id="colombia" value='colombia'
                class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="colombia">Colombia</label></li>
        <li><input type="checkbox" name="costa-rica" id="costa-rica" value='costa rica'
                class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="costa-rica">Costa Rica</label></li>
        <li><input type="checkbox" name="ecuador" id="ecuador" value='ecuador'
                class='custom-checkbox ${storage.filterStatus.checked?'checked':''}'>
            <label for="ecuador">Ecuador</label></li>
    </ul>
</li>
</ul>`
    
}
export default filterRender