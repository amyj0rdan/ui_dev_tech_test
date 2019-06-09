# John Lewis UI Dev Tech Test

## Task

Your task is to create a website that will allow customers to see the range of dishwashers John Lewis sells. This app will be a simple to use and will make use of existing John Lewis APIs.

[Getting started](#getting-started) | [Running tests](#running-tests) | [Usage](#usage) | [Approach](#approach) | [Other](#other)

## Getting started

```bash
git clone https://github.com/amyj0rdan/ui_dev_tech_test
npm install
```

## Running tests

#### To run unit tests
Open `SpecRunner.html` in browser

#### To run integration tests

Run server:

```bash
npm run server
```

Then in a separate terminal:

```bash
npm run cypress
```

Then follow instructions to run tests.

## Usage

```bash
npm run server
```

Then visit [`localhost:8080`](http://localhost:8080/)

## Approach

I am going to complete this challenge in Vanilla JS, using Jasmine for unit testing.

I started by considering the Product Grid page.
- Information on the individual products will be obtained from the ProductGridAPI and stored in productModels
- productGridModel will be a factory for productModels and will store a list of products.
- productGridView will take a productGridModel as an argument on instantiation and be able to return an HTML div.
- In a productGridPage.js file, a connection to the Product Grid API will be established and these functions will be called.

| productModel | |
| ------ | ------ |
| getProductId | return productID |
| getTitle | return title |
| getImageURL | return imageURL |
| getPrice | return price |
| *state* | *productID, title, imageURL, price* |

| productGridModel | |
| ------ | ------ |
| add | creates new productModel |
| getProducts | returns array of productModels |
| *state* | *products [productModel, productModel, etc.]* |

| productGridView| |
| ------ | ------ |
| createHTML | returns HTML div with details of product from productModels |
| *state* | *productGridModel, which includes products [productModel, productModel, etc.]* |

I then considered how I would extend this for the optional Product Page part of the tech test.
- I would need a new productIndividualModel object, because more information on the product needs to be stored than is required for the Product Grid page and this information is obtained from a separate API. I considered accessing both APIs at the same time and storing all the information in one productModel, but that seems inefficient and I thought I should only access the information required for the individual product pages when required.
- productView will take a productIndividualModel as an argument on instantiation and be able to return an HTML div.
- In a separate productPage.js file, a connection to the Product Page API will be established. When the GET request is made, the productID of the item clicked on will be passed to the productPage.js to retrieve the relevant information.

| productIndividualModel | |
| ------ | ------ |
| getTitle | return title |
| getMedia | return media (imageURL) |
| getPriceNow | return priceNow |
| *continued for all state below...* | |
| *state* | *title, media, priceNow, productInformation, displaySpecialOffer, includedServices, code (productID), productSpecificationName, productSpecificationValue* |

| productIndividualView | |
| ------ | ------ |
| createHTML | returns div of HTML |
| *state* | *productIndividualModel* |

## Other

#### To run linter

```bash
./node_modules/.bin/eslint filepath/file
```

eg.

```bash
./node_modules/.bin/eslint src/ProductModel.js
```

Or

```bash
npx eslint [file or directory]
```

eg.

```bash
npx eslint src
```

## Next steps and future considerations

- Functionality/styling not yet implemented:
  - Improve CSS - improve margin spacing around product grid (Reset CSS? Clear all margins from all elements?), fixed location of product descriptions/prices, improve dynamic changes for portrait and landscape.
  - Product page image carousel - CSS element and interactive JS.
  - Product specification section - store information in productIndividualModel?

- If I was to do this project again, I would probably make the following changes:
  - Classes using ES6 rather than functions: the functions I have created are essentially behaving as classes.
  - Classes running in the server side rather than the client side: the functions store the data from the API and create the HTML which is input into the HTML template. Accessing the API, storing the data and creating the HTML could be done on the server side and then only interactivity with the page done on the client side.
  - Therefore I would run the app on a server rather than as a single page app. I explored using Express ([see branch](https://github.com/amyj0rdan/ui_dev_tech_test/tree/express)), but decided as time was limited, I would continue with the app on the client side. I would probably use something like Handlebars to insert HTML generated server side into my HTML template.
