let fruits = {
    fruit: "Orange",
    amount:30,
    fruitCost: function(activity){
        return `Two ${this.fruit}s for KES ${this.amount*2}.00`
    }
}
console.log(fruits.fruitCost());


