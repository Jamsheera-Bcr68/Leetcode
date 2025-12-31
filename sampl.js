const products = [
  { id: 1, name: "Shirt", category: "Men", price: 1200, quantity: 2 },
  { id: 2, name: "Dress", category: "Women", price: 2500, quantity: 1 },
  { id: 3, name: "Jeans", category: "Men", price: 1800, quantity: 3 },
  { id: 4, name: "Skirt", category: "Women", price: 1500, quantity: 2 },
  { id: 5, name: "T-Shirt", category: "Men", price: 800, quantity: 5 }
];

let max=products.reduce((acc,p)=>acc+(p.quantity*p.price),0)
console.log(max);

