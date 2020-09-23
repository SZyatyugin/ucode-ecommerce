interface dataInterface {
    store: product[],
    renderpage: number,
    showAll:boolean
}
class data implements dataInterface {
    store: product[];
    renderpage: number;
    showAll:boolean
   
    constructor() {
        this.store = [],
        this.renderpage=0,
        this.showAll=true
    }
    saveToStore(elem: product): void {
        this.store.push(elem);
    }
    sortByHighestPrice(): void {
        this.store.sort((elemA, elemB) => {
            return elemA.price - elemB.price
        })
    }
    sortByLowestPrice(): void {
        this.store.sort((elemA, elemB) => {
            return elemB.price - elemA.price
        })
    }
    renderNewPage(elem:number):number{
        return this.renderpage=elem
    }
    changeFilterStatus(elem:string,status:boolean):void{
       let filterElem:any=`this.filterStatus.${elem}`;
filterElem=status;
    }

}
interface productInterface {
    id: number,
    company: string,
    brand: string,
    price: number,
    description: string,
    characters: string[],
    quantity: number,
    img: string,
    show:boolean
}
class product implements productInterface {
    id: number;
    company: string;
    brand: string;
    price: number;
    description: string;
    characters: string[];
    quantity: number;
    img: string;
    show:boolean
    constructor(id: number, company: string, brand: string, price: number, description: string, characters: string[], quantity: number, img: string) {
        this.id = id,
            this.company = company,
            this.brand = brand,
            this.price = price,
            this.description = description,
            this.characters = characters,
            this.quantity = quantity,
            this.img = img,
            this.show=false
    }
}

let id = (): number => {
    return Number(new Array(4).fill(null).map((elem) => {
        return elem = Math.floor(Math.random() * 10)
    }).join(''))
};
let arrayOfProducts: product[] = [
    new product(id(), "Blueprint", "Bokkisa", 25.30, 'This super fun coffee reminds us of watermelon candy, with a funky-sweet lemonade acidity that really makes it pop.', ['light', 'more than $22', 'South America', 'Brazil'], 6, '../build/assets/images/blueprint_coffee.jpeg'),
    new product(id(), 'Panther', 'Gorilla Summit', 21.20, 'This natural process coffee produced by Gerald Mbabazi in Southwestern Uganda is a treat, with funky notes of grilled pineapple and berries, plus a creamy body that reminds us of pistachio ice cream.', ['light', '$18-$22', 'Africa'], 5, '../build/assets/images/panther_coffee.jpeg'),
    new product(id(), 'Revelator', 'Petunias', 17.35, 'With notes of cherry and chocolate, this coffee is harmony in a cup. We have yet to find anyone who questions its sweet, velvety deliciousness', ['light-medium', '$15-$18', 'Columbia', 'South America'], 3, '../build/assets/images/revelator_coffee.jpeg'),
    new product(id(), 'Bird Rock', 'Bird Rock Blend', 18.85, 'Full bodied, chocolaty, and roasty-toasty; this bold, dark coffee boasts interesting peppery notes that spice up a very comforting cup.', ['medium', '$18-$22', 'Colombia', 'South America'], 2, '../build/assets/images/bird-rock.jpeg'),
    new product(id(), "Pt's", 'Flatlander Signature Blend', 17.35, 'Easy does it. And this coffee proves just that. A bittersweet aroma is balanced by a nutty, sweet finish. Here’s to one less complication.', ['dark', 'costa rica', 'south america', '$15-$18'], 1, "../build/assets/images/pts.jpeg"),
    new product(id(), 'Irving Farm', 'Gotham Blend', 17.35, "Extra dark, rich, and full of chocolatey indulgence. It may not be the coffee we deserve, but it's definitely the coffee we need right now.", ['dark', '$15-$18', 'Asia'], 5, "../build/assets/images/irving-farm.jpeg"),
    new product(id(), 'Klatch', 'Old World Vienna', 17.35, "Rich, robust, and nostalgic: this full-bodied cup's hints of spice and dark chocolate invoke an old-world romance.", ['medium-dark', '$15-$18', 'Central America'], 4, "../build/assets/images/klatch.jpeg"),
    new product(id(), 'Stay Golden', 'Benti Nenka', 29.45, 'Delicate notes of peach, a gentle key lime acidity. and a cotton candy sweetness all add up to a coffee that can best be described as: ridiculously pretty.', ['medium-dark', 'more than $22', 'North America'], 2, "../build/assets/images/stay_golden.jpeg"),
    new product(id(), "Oren's", "Two Bridges", 17.35, "Sweet balance found in soft citrus acidity and toffee sweetness. So smooth and poetic, we had to write a haiku.", ['light', '$15-$18', 'South America', 'Ecuador'], 1, "../build/assets/images/orens.jpeg"),
    new product(id(), "Sparrows", "All Seasons Blend", 17.35, "Living up to its name, this clean, sweet cup is perfect all year round - featuring notes of sweet cherry and smooth chocolate.", ['dark', '$15-$18', 'South America'], 10, "../build/assets/images/sparrow-coffee.jpeg"),
    new product(id(), 'Metric', 'Peru Dionisio Pintado', 20.00, 'Soft and smooth, with notes of sweet vanilla and caramel plus the tiniest pinch of grapefruit zest.', ['dark', '$18-$22', 'Asia'], 4, "../build/assets/images/metric.jpeg"),
    new product(id(), 'Broadsheet', 'Laayyoo', 25.90, "Traditional notes of blueberry mingle with a watermelon sweetness and green apple acidity. So fresh and so clean, this one puts a big ol' smile on our faces.", ['light', "South America", "Columbia", "more than $22"], 2, "../build/assets/images/broadsheet.jpeg"),
    new product(id(), 'Greater Goods', 'Rise and Shine', 17.35, 'Dark and bold and super sweet, with noticeable notes of dark chocolate. This is the kind of cup that starts off a very good day.', ['medium-dark', '$15-$18', 'Central America'], 10, "../build/assets/images/coffee-co.jpeg"),
    new product(id(), 'Equator', 'Peru Cajamarca Fair Trade Organic', 20.00, 'This big-bodied Peruvian cup boasts a buttery mouthfeel, notes of dried cherry, and a milk chocolaty sweetness.', ['$18-$22', 'Central America', 'medium'], 12, "../build/assets/images/equator-coffees.jpeg"),
    new product(id(),'Red Rooster','Farmhouse Breakfast Blend',14.00,'Caramel sweetness stars in this tremendously drinkable blend, brightened by a meyer lemon acidity and a nutty-sweet finish.',['Less than $15','Africa','dark'],10,"../build/assets/images/Floyd-Farmhouse.jpeg"),
    new product(id(),'Red Rooster','Waxwing',13.00,'Earthy depth meets a juicy berry sweetness in a rich, chocolaty body - this blend is ready to be the wind beneath your wings.',['Ecuador','Less than $15','South America','medium'],5,"../build/assets/images/red-rooster.jpeg"),
    new product(id(),'Red Rooster','Funky Chicken',12.00,"Don't be surprised if you flap your arms and your feet start kickin' - this balanced blend brings together an earthy sweetness with a bright plum acidity.",['Less than $15','Asia','dark'],4,"../build/assets/images/red-rooster-funky-chicken.jpeg")
]
let storage = new data();
arrayOfProducts.forEach((element) => {
    storage.saveToStore(element)
})

export default storage;