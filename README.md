# John Lewis UI Dev Tech Test

## Task

Your task is to create a website that will allow customers to see the range of dishwashers John Lewis sells. This app will be a simple to use and will make use of existing John Lewis APIs.

[Getting started](#getting-started) | [Running tests](#running-tests) | [Usage](#usage) | [Approach](#approach)

## Getting started

```bash
git clone https://github.com/amyj0rdan/ui_dev_tech_test
```

## Running tests

## Usage

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
