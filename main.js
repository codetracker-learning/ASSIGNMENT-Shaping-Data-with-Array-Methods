// start arrays
const businesses = [
  {
    purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
    phoneWork: "089.129.2290 x9400",
    orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
    companyName: "Care-media",
    companyIndustry: "Education",
    addressZipCode: "56839",
    addressStateCode: "WI",
    addressFullStreet: "8417 Franklin Court Tunnel",
    addressCity: "Mouthcard",
  },
  {
    purchasingAgent: { nameLast: "Steuber", nameFirst: "Kamron" },
    phoneWork: "(833) 222-7579 x5874",
    orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
    companyName: "Stanholding",
    companyIndustry: "Hospitality",
    addressZipCode: "09705",
    addressStateCode: "NY",
    addressFullStreet: "2889 Fawn Court Garden",
    addressCity: "Fellsmere",
  },
  {
    purchasingAgent: { nameLast: "Gutkowski", nameFirst: "Kaylee" },
    phoneWork: "235.266.6278",
    orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
    companyName: "Highnix",
    companyIndustry: "Agriculture",
    addressZipCode: "49376",
    addressStateCode: "ME",
    addressFullStreet: "5734 Maple Avenue Throughway",
    addressCity: "Little Genesee",
  },
  {
    purchasingAgent: { nameLast: "Crona", nameFirst: "Lauren" },
    phoneWork: "1-449-987-3083 x23263",
    orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
    companyName: "Conit",
    companyIndustry: "Defense",
    addressZipCode: "53326",
    addressStateCode: "IL",
    addressFullStreet: "5755 Hillside Drive Crossroad",
    addressCity: "Norval",
  },
  {
    purchasingAgent: { nameLast: "Krajcik", nameFirst: "Elvera" },
    phoneWork: "1-730-411-8580",
    orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
    companyName: "Dong-tom",
    companyIndustry: "Energy",
    addressZipCode: "67071",
    addressStateCode: "KS",
    addressFullStreet: "4826 Arch Street Lights",
    addressCity: "Newburyport",
  },
  {
    purchasingAgent: { nameLast: "Kling", nameFirst: "Ellie" },
    phoneWork: "(868) 043-0950",
    orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
    companyName: "Dan-dox",
    companyIndustry: "Manufacturing",
    addressZipCode: "98842",
    addressStateCode: "WV",
    addressFullStreet: "9767 Cedar Court Corner",
    addressCity: "Prince George",
  },
  {
    purchasingAgent: { nameLast: "Robel", nameFirst: "Otilia" },
    phoneWork: "(298) 305-1942 x53653",
    orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
    companyName: "J-base",
    companyIndustry: "Health care",
    addressZipCode: "72993",
    addressStateCode: "FL",
    addressFullStreet: "9954 Buckingham Drive Mountains",
    addressCity: "Vesper",
  },
  {
    purchasingAgent: { nameLast: "Gusikowski", nameFirst: "Karolann" },
    phoneWork: "(743) 934-8981 x692",
    orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
    companyName: "Span-fix",
    companyIndustry: "Construction",
    addressZipCode: "59860",
    addressStateCode: "MT",
    addressFullStreet: "4151 Orange Street Extension",
    addressCity: "Little Rock Air Force Base",
  },
  {
    purchasingAgent: { nameLast: "Hartmann", nameFirst: "Zena" },
    phoneWork: "727.635.6610 x6483",
    orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
    companyName: "Sanaplane",
    companyIndustry: "Information",
    addressZipCode: "85156",
    addressStateCode: "NY",
    addressFullStreet: "4765 Fairview Avenue Locks",
    addressCity: "Dennisville",
  },
  {
    purchasingAgent: { nameLast: "Torphy", nameFirst: "Celia" },
    phoneWork: "(992) 079-1670 x71569",
    orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
    companyName: "Ran-taxon",
    companyIndustry: "Manufacturing",
    addressZipCode: "96673",
    addressStateCode: "MD",
    addressFullStreet: "7157 Hudson Street Ford",
    addressCity: "Watrous",
  },
];
// end arrays

// start functions
const nav = document.querySelector("#nav");
nav.innerHTML = `<div class="topnav">
    <a class="active" href="index.html">Home</a>
    <a href="ny.html">New York</a>
    <a href="manufacturing.html">Manufacturing</a>
    <a href="agents.html">Purchasing Agents</a>
  </div>`;
// end functions

// start methods
// forEach() method
const home = () => {
  if (document.title === "Home") {
    const outEl = document.querySelector("#output");
    outEl.innerHTML = "<h1>Active Businesses</h1>";

    businesses.forEach((business) => {
      outEl.innerHTML += `
        <h2>${business.companyName}</h2>
        <section>
          ${business.addressFullStreet}
        </section>
        <section>
          ${business.addressCity}, ${business["addressStateCode"]} ${business["addressZipCode"]}
        </section>
      `;
      outEl.innerHTML += "<hr/>";
    });


    // find()
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
  }
};

// filter() method
// Array to contain all the New York businesses
const ny = () => {
  if (document.title == 'New York') {
    const newYorkBusinesses = businesses.filter((business) => {
      let inNewYork = false;

      if (business.addressStateCode === "NY") {
        inNewYork = true;
      }

      return inNewYork;
    });

    const outEl = document.querySelector("#ny");
      outEl.innerHTML = "<h1>New York Businesses</h1>";

      newYorkBusinesses.forEach((business) => {
        outEl.innerHTML += `
          <h2>${business.companyName}</h2>
          <section>
            ${business.addressFullStreet}
          </section>
          <section>
            ${business.addressCity}, ${business["addressStateCode"]} ${business["addressZipCode"]}
          </section>
        `;
        outEl.innerHTML += "<hr/>";
      });
  };
};

// Array to contain all manufacturing businesses
const manufacturing = () => {
  if (document.title == 'Manufacturing') {
    const manufacturingBusinesses = businesses.filter((business) => {
      let manuBiz = false;
      if (business.companyIndustry === "Manufacturing") {
        manuBiz = true;
      }
      return manuBiz;
    });

    const outEl = document.querySelector("#manufacturing");
      outEl.innerHTML = "<h1>Manufacturing Businesses</h1>";
      manufacturingBusinesses.forEach((business) => {
        outEl.innerHTML += `
          <h2>${business.companyName}</h2>
          <section>
            ${business.addressFullStreet}
          </section>
          <section>
            ${business.addressCity}, ${business["addressStateCode"]} ${business["addressZipCode"]}
          </section>
        `;
        outEl.innerHTML += "<hr/>";
      });
  };
};

// purchasing agents
const agents = () => {
  if (document.title == 'Purchasing Agents') {
    const outEl = document.querySelector("#agents");
    outEl.innerHTML += "<h1>Purchasing Agents</h1>";

    /*
        Using map(), you extract the purchasing agent object
        from each business and store it in a new array
    */
    const agents = businesses.map(business => {
        return business.purchasingAgent
    });

    console.table(agents);

    agents.forEach(agent => {
      outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
      outEl.innerHTML += "<hr/>";
    });
  };
};




// end methods

// create init
const init = () => {
  nav;
  home();
  ny();
  manufacturing();
  agents();
};

init();
// end init
