interface filterInterface{
    filterName:string;
    filterClassName:string;
    filterStatus:boolean;
    filterClicked:boolean;
    innerFilter:createInnerFilter[]
    }
    class createFilter implements filterInterface{
        filterName:string;
        filterClassName:string;
        filterStatus:boolean;
        filterClicked:boolean;
        innerFilter:createInnerFilter[];
        constructor(filterName:string,filterClassName:string,filterStatus:boolean,filterClicked:boolean){
            this.filterName=filterName;
            this.filterClassName=filterClassName;
            this.filterStatus=filterStatus;
            this.filterClicked=filterClicked;
            this.innerFilter=[];
        };
        createInnerFilter(elem:createInnerFilter){
this.innerFilter.push(elem);
        }
    }

    interface innerFilterInterface{
        innerFilterName:string;
        innerFilterStatus:boolean;
        innerFilterId:string;
    }
    class createInnerFilter implements innerFilterInterface{
        innerFilterName:string;
        innerFilterId:string;
        innerFilterStatus:boolean;
        
        constructor(innerFilterName:string,innerFilterId:string,innerFilterStatus:boolean){
this.innerFilterName=innerFilterName;
this.innerFilterId=innerFilterId;
this.innerFilterStatus=innerFilterStatus;
        }
    }

    let roastlevel=new createFilter('Roast Level','roast-level',false,false);
    let price=new createFilter('Price','price-level',false,false);
    let region=new createFilter('Region','region-level',false,false);
    let country=new createFilter('Country','country-level',false,false);
    let roastlevelArray:createInnerFilter[]=[
        new createInnerFilter('Light','light',false),
        new createInnerFilter('Light-Medium','light-medium',false),
        new createInnerFilter('Medium','medium',false),
        new createInnerFilter('Medium-Dark','medium-dark',false),
        new createInnerFilter('Dark','dark',false)
    ];
    let priceArray:createInnerFilter[]=[
        new createInnerFilter('Less than $15','less-than-$15',false),
        new createInnerFilter('$15-$18','$15-$18',false),
        new createInnerFilter('$18-$22','$18-$22',false),
        new createInnerFilter('More than $22','more-than-$22',false)
    ];
    let regionArray:createInnerFilter[]=[
        new createInnerFilter("Africa",'africa',false),
        new createInnerFilter('Asia','asia',false),
        new createInnerFilter('Central America','central-america',false),
        new createInnerFilter('North America','north-america',false),
        new createInnerFilter('South America','south-america',false)
    ];
    let countryArray:createInnerFilter[]=[
        new createInnerFilter('Brazil','brazil',false),
        new createInnerFilter('Colombia','colombia',false),
        new createInnerFilter('Costa Rica','costa-rica',false),
        new createInnerFilter('Ecuador','ecuador',false)
    ]
roastlevelArray.map((elem)=>{
    roastlevel.createInnerFilter(elem);
});
priceArray.map((elem)=>{
    price.createInnerFilter(elem)
})
regionArray.map((elem)=>{
    region.createInnerFilter(elem)
})
countryArray.map((elem)=>{
    country.createInnerFilter(elem)
})
export {roastlevel,price,country,region,filterArray}
let filterArray:createFilter[]=[roastlevel,price,country,region];
console.log(filterArray)
