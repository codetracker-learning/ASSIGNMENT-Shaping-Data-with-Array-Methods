
> **_Lightning Exercise:_** Add another section sibling to the current one and use object dot notation to display each company's city. Use square bracket notation to display the  state code. Use dynamic square bracket notation to add the  zip code.

## filter() Method

Now you have code to show web pages for each of the businesses that have active accounts. You call Doris over and show her the results, and she's very excited.

> Doris leans forward in her seat, eyes bright, and exclaims, "Yes! This is exactly what I need!" She starts to scroll through all of the businesses, clearly enjoying her new toy.
>
> After several minutes of this, she abruptly stops and turns her head quickly in your direction, eyes wide. "You know, my regional manager, Barry has been asking me for something for months now. He has a new sales rep in New York and wants to check how many sales are being made in that state. So out of all these businesses, I need to see only the ones in New York."
>
> She turns her head towards the computer, narrows her eyes slightly and asks in a low voice, "Can you do that?"
>
> Unsure why she needed to ask in such a dubious manner, you confidently respond that you can. She smirks, takes out her cell phone, and walks back to her office while dialing a number...

For a task like this, the array `filter()` method is perfect, because you need to look at each object in the businesses array, check to see if it meets Doris' condition, and if it does, place that object in a new array that only contains the businesses she wants.

![list of new york businesses](./dotard-simbleton-newyork-list.png)

The filter function creates a new array from the existing one, so you can invoke it and assign it to a new variable such as in the code below. The function that you pass to `filter()` should return true or false. If it returns true, then the current item will be placed in the new array.

```js
// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
  let inNewYork = false

  if (business.addressStateCode === "NY") {
      inNewYork = true
  }

  return inNewYork
})
```

> **_Lightning Exercise:_** Use `filter()` to create another array named `manufacturingBusinesses` that will contain all businesses in the manufacturing industry. Display those to the DOM.

#### Example output

![manufacturing businesses list](./dotard-simbleton-manufacturing-list.png)

## map

> Doris sidles up next to you after your lunch break, holding a cup of herbal tea. She takes a quick sip, inhales deeply and says, "I love everything you've done so far. This is making a huge difference in everyone's productivity."
>
> You're fairly sure that by _everyone_, she means herself, but you nod, smile and respond, "Thank you. Just glad to be making a difference."
>
> Doris smiles back and says, "Now that I have a list of businesses, I realize that I would also love to have a list of purchasing agents. All by themselves. On a web page like the business names."

To achieve this task for Doris, you still need to iterate the original array of businesses, but all you need is the purchasing agent names. If you can extract those names and put them in their own array, then you can use `forEach()` to display them in the DOM.

The `map()` method is perfect for that. The map method is used for transforming items in one array to a different structure, and storing the new items in another array. Here's how you would do that for this feature.

```js
outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
    return business.purchasingAgent
})

console.table(agents)

agents.forEach(agent => {
  outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
  outEl.innerHTML += "<hr/>";
});
```

You will see the list of agents in the DOM. Also look at the new array in the Developer Console. The only information in that array is the purchasing agent properties.

![purchasing agents with console.table](./purchasing-agents.png)

> **Lightning Exercise:** Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number

```js
{
    "fullName": "Kaylee Gutkowski",
    "company": "Highnix",
    "phoneNumber": "235.266.6278"
}
```

#### Example output

![list of agents](./dotard-simbleton-agent-list.png)

## find

> You have been spending the morning backing up the hard drives that contain all the customer information to a cloud service. The unlocked desk drawer didn't seem an adequate corporate backup plan to you.
>
> As you watch your uploading progress bars, you notice with mild interest as Doris has been pacing her office for the last 45 minutes, clearly talking to someone on speaker phone. She doesn't appear to be angry, or even particularly agitated, just a bit nervous.
>
> You eventually need to use the restroom, and after a few minutes, you are returning to your desk and notice Doris waiting for you. She is sitting on the edge of your desk, staring out of one the windows that faces the faded parking lot at the side of the building. She looks distracted.
>
> As you grab your chair and slide it towards you so that you can go back to watching progress bars, she turns and smiles perfunctorily at you. As you sink into your chair, she stands up quickly and says, "I just got off the phone with our accountants. We needed to look at each of our customers and review their orders for this past year. It took forever because I kept needing to scroll through our massive list of customers until I found the one they needed."

As you consider this request, you realize that you'll need to provide Doris an input text field so that she can type in the name of a company. You will then need to take that search string, iterate the companies, and as soon as you find a match, display all the properties.

The `find()` method on arrays is perfect this.

The method does exactly what it's name suggests. It iterates an array and as soon as it finds one item that passes the condition that you provide, it returns that item to you.

```js
const candies = [
    {
        name: "Lollipop",
        price: 2.99
    },
    {
        name: "Tootsie Roll",
        price: 1.49
    },
    {
        name: "Sugar Daddy",
        price: 2.49
    }
]

const firstCheapCandy = candies.find(candy => candy.price < 2.00)

console.log(firstCheapCandy)
> { name: "Tootsie Roll", price: 1.49 }
```

In order to implement Doris' request, you first must add an input field to your `index.html` file.

```html
<input type="text" placeholder="Enter business name" id="companySearch" />
```

To know when Doris is ready to search, you decide to capture the key press event. This will allow her to simply press her return key and execute the search.

![searching businesses](./AjtphvnYsK.gif)

```js
document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                    business.companyName.includes(keyPressEvent.target.value)
            );

            outEl.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });
```

> **Lightning Exercise 1:** Refactor your code to search for purchasing agents instead. If the search text is found in the first name of any purchasing agent, show that agent.

> **Lightning Exercise 2:** Refactor your code so that if the search text is found in the first name, or last name, of any purchasing agent, show that agent.


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

## Other Helpful Methods

* [reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) - Reverses the order of items in the array
* [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) - Determine if every item in an array passes a condition
* [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) - Determine if some of the items in an array passes a condition
* [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) - Put an array of items in order

[Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) on every method available on arrays.

## For the Visual Learners

![emojis](./array_methods.png)

## Videos to Watch

* [6 JavaScript Native Array Functions in 5 Minutes](https://www.youtube.com/watch?v=9ar5ZpBW7NE)
* [Common Array Methods - Beau teaches JavaScript](https://www.youtube.com/watch?v=MeZVVxLn26E)

---

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
