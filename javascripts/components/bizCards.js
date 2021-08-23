import renderToDom from '../helpers/renderToDom.js';
import businesses from '../helpers/data/data.js'

const showCards = () => {
    let domString = '';
    businesses.forEach(business => {
        domString += `
        <h2>${business.companyName}</h2>
        <section>
          ${business.addressFullStreet}
        </section>
        <section>
          ${business.addressCity}
        </section>
        <section>
          ${business['addressStateCode']}
        </section>
        <section>
          ${business['addressZipCode']}
        </section>
        `
    });
    renderToDom('#bizContainer', domString)
};

export default showCards;