// first question
let price= 12.567
let roundedPrice= price.toFixed(2)
console.log(`${roundedPrice}`)

//second  question
let name= "Thesha";
console.log(name.toUpperCase());

// third question
let item = "Keyboard";   
let rupees = 250;
console.log("Item:".padEnd(10) + item);
console.log("Price:".padEnd(10) + rupees);

// fourth question
let value = "123abc";
let numberValue = Number(value);
if (Number.isNaN(numberValue)) {
  console.log("Conversion failed: Not a valid number");
} else {
  console.log(`Converted number: ${numberValue}`);
}

// fivth question
let prices = [500.25, 1200, 99.99, 234.32]; 
let total = prices.reduce((sum, price) => sum + price, 0);
let formattedTotal = total.toLocaleString('en-IN', { 
  minimumFractionDigits: 2, 
  maximumFractionDigits: 2 
});
console.log(`Total Price: Rs ${formattedTotal}`);



// sixth question
let text = "hello@@world@@!";
let cleanedText = text.replace(/[^a-zA-Z0-9\s]/g, "");
console.log(`Cleaned text: ${cleanedText}`);


