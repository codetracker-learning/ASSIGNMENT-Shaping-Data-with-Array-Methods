## reduce

**<span style="color: red">Warning:</span>** The `reduce()` array method is going to seem confusing. More than the others, it takes practice, trial, and error to truly understand when it's useful and its power.

> A week goes by as you clean up your code and starting defining a strategy for getting the company on a private Github account so you can have all of the code in one place. Then Doris calls you into a meeting room where you find her, Walter - the head of the office sales team - and Howard sitting in old, burgundy office chairs. They are all looking at your expectantly.
>
> Doris breaks the silence with, "Walter here has a request, and I told him that you would definitely be able to do it."
>
> You glance at Walter who flashes his overly-brilliant white teeth at you.
>
> Doris continues, "Remember that list of businesses I had you make for me? Well, Walter would love to have their total order amount listed for each company in that list."
>
> Walter speaks in a strong, but slightly annoying baritone voice, and adds, "Yeah just keep the report you have now, but in parenthesis next to the company add the sum of all orders."

Now, you could achieve this using `forEach()` on the order property for each business. Below is the existing code for listing businesses, but with the addition of a `forEach()` for calculating the order summary.

```js
businesses.forEach(business => {
    /* CALCULATE ORDER SUMMARY */
    let totalOrders = 0
    business.orders.forEach(order => totalOrders += order)


    outEl.innerHTML += `
        <h2>
            ${business.companyName}
            ($${totalOrders})
        </h2>
        <section>
            ${business.addressFullStreet}
        </section>
        <section>
            ${business.addressCity},
            ${business.addressStateCode}
            ${business.addressZipCode}
        </section>
    `;
    outEl.innerHTML += "<hr/>";
});
```

The only drawback, which is minor, is that you had to initially declare a variable with a zero value, and then invoke the `forEach()` method in order to add to it. You can combine those two steps into one step with the `reduce()` method. One of the main purposes of the reduce method is to iterate over a collection, do some logic with each item, and have one, single result at the end.

* Iterate a list of words and build a sentence
* Iterate a list of integers and find the sum of all of them
* Iterate a list of objects and build a unique set of a property values

Here is how you could use `reduce()` to replace the `forEach()` from above. That sneaky little zero at the end is actually the second argument for the reduce method. It's what value the accumulation should start with. If you were building a sentence, that would be an emtpy string instead of zero.

```js
/* CALCULATE ORDER SUMMARY */
let totalOrders = business.orders.reduce(
    (currentTotal, nextValue) => currentTotal += nextValue,
    0
)
```

You can read the MDN documentation on [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) for more information.

> **Lightning Exercise 1:** Use the reduce method on the following array to determine how much total rain fell last month.

```js
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce()

console.log(totalRainfall)
```

> **Lightning Exercise 2:** Use the reduce method on the following array to build a sentence.

```js
const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce()

console.log(sentence)
```


* [reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) - Reverses the order of items in the array
* [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) - Determine if every item in an array passes a condition
* [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) - Determine if some of the items in an array passes a condition
* [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) - Put an array of items in order

[Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) on every method available on arrays.

## Practice: Big Spenders

> Doris leans forward in her seat, eyes bright, and exclaims, "I don't know why I didn't hire someone earlier. This is making my job so much easier!" She starts to scroll through all of the businesses in your Active Customers report, clearly enjoying her new toy.
>
> After several minutes of this, she abruptly stops and turns her head quickly in your direction, eyes wide. "You know, my regional manager, Barry has been asking me for something for months now. He wants me to produce a report for him that list only the companies that have placed an order for more than nine thousand dollars."

Use the filter method to get all the big spenders in the main array into a new one.

```js
// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {

})
```

## Practice: Solar System

### Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

```bash
mkdir -p ~/workspace/javascript/exercises/array-methods && cd $_
touch index.html
touch array-methods.js
```

### Requirements

Copy the code below into a JavaScript file, and follow the instructions in the comments.

```javascript
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
```

## Practice: Spam, Spam, Spam, Spam

> **Learning Objective:** Practice accessing data within an array of objects

You have been tasked with building a list of email addresses of all of our customer's contacts so we can spam them with an email about Miffles the Vampire Weiner Dog.

1. Create a new project in `workspace`.
1. In your JavaScript file, paste the customers array below that contains the emails we need to retrieve.

```
let customers = [
  {
    "location": {
      "street": "Old York Road",
      "state": "Delaware",
      "country": "Qatar",
      "city": "Irma"
    },
    "last_name": "Herzog",
    "job": {
      "position": "Senior Intranet Assistant",
      "phone_number": "1-035-577-1574",
      "department": "sales",
      "company": "Ganjazamlux"
    },
    "first_name": "Johnson",
    "contacts": {
      "mobile": "102.596.5226",
      "email": [
        "rerum@outlook.com",
        "possimus_abraham@hotmail.com",
        "yoshiko@gmail.com"
      ]
    }
  },
  {
    "location": {
      "street": "Maple Street",
      "state": "Wyoming",
      "country": "Uzbekistan",
      "city": "Ortonville"
    },
    "last_name": "Stehr",
    "job": {
      "position": "Dynamic Quality Administrator",
      "phone_number": "555.173.9685",
      "department": "customer service support",
      "company": "Hating"
    },
    "first_name": "Rogelio",
    "contacts": {
      "mobile": "1-746-406-3132",
      "email": [
        "saw_savannah@yahoo.com",
        "this46@outlook.com",
        "quidem_shayna@hotmail.com"
      ]
    }
  },
  {
    "location": {
      "street": "Cleveland Avenue",
      "state": "South Carolina",
      "country": "Lebanon",
      "city": "New Salem"
    },
    "last_name": "McDermott",
    "job": {
      "position": "Human Research Architect",
      "phone_number": "1-120-949-9685",
      "department": "accounting",
      "company": "Keyzazim"
    },
    "first_name": "Herbert",
    "contacts": {
      "mobile": "705.404.8808",
      "email": [
        "him_joshuah@yahoo.com",
        "neha@outlook.com",
        "tail@gmail.com"
      ]
    }
  },
  {
    "location": {
      "street": "Route 30",
      "state": "Pennsylvania",
      "country": "Nauru",
      "city": "Brocton"
    },
    "last_name": "Buckridge",
    "job": {
      "position": "National Usability Technician",
      "phone_number": "215.951.1943",
      "department": "research and development",
      "company": "Dongsolofind"
    },
    "first_name": "Keagan",
    "contacts": {
      "mobile": "665.835.9595",
      "email": [
        "trade_hunter@yahoo.com",
        "ut@hotmail.com",
        "throw@gmail.com"
      ]
    }
  },
  {
    "location": {
      "street": "Arch Street",
      "state": "Illinois",
      "country": "Guam",
      "city": "Stroud"
    },
    "last_name": "Barton",
    "job": {
      "position": "Dynamic Directives Analyst",
      "phone_number": "1-069-596-0831 x15766",
      "department": "operations",
      "company": "Zoomruntam"
    },
    "first_name": "Kenton",
    "contacts": {
      "mobile": "(972) 219-3017",
      "email": [
        "alberto@outlook.com",
        "june@gmail.com",
        "rafaela@hotmail.com"
      ]
    }
  },
  {
    "location": {
      "street": "Race Street",
      "state": "Nebraska",
      "country": "Republic of Saudi Arabia",
      "city": "Guelph"
    },
    "last_name": "Mitchell",
    "job": {
      "position": "Principal Implementation Specialist",
      "phone_number": "713-818-2034 x23626",
      "department": "IT support",
      "company": "Hot-tom"
    },
    "first_name": "Hattie",
    "contacts": {
      "mobile": "(144) 533-6049",
      "email": [
        "river32@yahoo.com",
        "class65@gmail.com",
        "scale_oda@outlook.com"
      ]
    }
  },
  {
    "location": {
      "street": "Prospect Avenue",
      "state": "Massachusetts",
      "country": "Fiji",
      "city": "Hachita"
    },
    "last_name": "Rohan",
    "job": {
      "position": "Customer Identity Producer",
      "phone_number": "110-592-6773 x3160",
      "department": "production",
      "company": "Zapware"
    },
    "first_name": "Clotilde",
    "contacts": {
      "mobile": "005.981.1039",
      "email": [
        "winter@outlook.com",
        "kyla@gmail.com",
        "boy@yahoo.com"
      ]
    }
  },
  {
    "location": {
      "street": "Lexington Court",
      "state": "Georgia",
      "country": "Tokelau",
      "city": "Blackwater"
    },
    "last_name": "Kuphal",
    "job": {
      "position": "Direct Division Executive",
      "phone_number": "(763) 900-2576 x943",
      "department": "operations",
      "company": "Inchdonin"
    },
    "first_name": "Marcelle",
    "contacts": {
      "mobile": "1-511-518-7079",
      "email": [
        "try@outlook.com",
        "part73@yahoo.com",
        "mother5@hotmail.com"
      ]
    }
  },
  {
    "location": {
      "street": "Cobblestone Court",
      "state": "Minnesota",
      "country": "Saint Helena, Ascension and Tristan da Cunha",
      "city": "North Stonington"
    },
    "last_name": "Thompson",
    "job": {
      "position": "Product Response Facilitator",
      "phone_number": "(948) 430-6348 x4290",
      "department": "communication",
      "company": "Goldcare"
    },
    "first_name": "Briana",
    "contacts": {
      "mobile": "714-922-9557",
      "email": [
        "randi@outlook.com",
        "christian@yahoo.com",
        "tempore_gilda@hotmail.com"
      ]
    }
  },
  {
    "location": {
      "street": "Mill Street",
      "state": "Kentucky",
      "country": "Ireland",
      "city": "Crystal"
    },
    "last_name": "Weimann",
    "job": {
      "position": "Future Web Representative",
      "phone_number": "693-204-7849 x4251",
      "department": "legal",
      "company": "K-touch"
    },
    "first_name": "Brittany",
    "contacts": {
      "mobile": "1-327-084-4643",
      "email": [
        "she@hotmail.com",
        "quam3@gmail.com",
        "recusandae23@outlook.com"
      ]
    }
  }
];
```

From that array, extract just the customers' contact email addresses and store them in a new array. You will need a nested array method - meaning one iteration inside another one - since you need to iterate the entire array of customers, and then iterate the array of emails for each one.


## Challenge: Chaining Methods

### Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

```bash
mkdir -p ~/workspace/exercises/javascript/chaining-methods && cd $_
touch index.html
touch chaining.js
```

### Requirements

Using one single line of JavaScript code, complete the following tasks on the array of integers below.

1. Sort the numbers in descending order (10, 9, 8, 7, etc).
1. Remove any integers greater than 19.
1. Multiply each remaining number by 1.5 and then subtract 1.
1. Then output (either in the DOM or the console) the sum of all the resulting numbers.

```js
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
```
