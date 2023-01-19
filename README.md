# Ionic Angular with SSR and some architecture

- Components
- Pipes
- Directives
- Services


## Project Specifications:
The model implementation is provided and read-only.



The task is to implement the REST service that exposes the /products endpoint, which allows for managing the collection of product records in the following way:

- POST request to /products:
    - creates a new product
    - expects a JSON product object without the id and isPublished property as the body payload. You can assume that the given object is always valid.
    - a new product should always be created with isPublished property set to false
    - if the payload contains isPublished (either true or false) property, it should be disregarded and always set to false on object creation
    - adds the given product object to the collection of products and assigns a unique integer id to it. The first created product must have id 1, the second one 2, and so on.
    - the response code is 201, and the response body is the created product object

- GET request to /products:
    - return a collection of all products
    - the response code is 200, and the response body is an array of all product objects ordered by their ids in increasing order

- PATCH request to /products/<id>:
    - you can assume that the body sent to this patch request will always be {"isPublished" : true}
    - if the matching product exists, it should validate if the product can be published based on the following criteria in the same order they are mentioned below: 
        - CRITERIA 1: check if the mrp property of the matching product is greater than equal to the selling price of the product
        - CRITERIA 2: check if the stock quantity of the product is greater than 0. 
    - if any of the criterias fail, the response code is 422 with the response body containing an array of error messages:
    - if only CRITERIA 1 fails, the response body should be an array containing the message 'MRP should be less than equal to the Price' at the 0th index.
    - if only CRITERIA 2 fails, the response body should be an array containing the message 'Stock count is 0' at the 0th index.
    - if both CRITERIA 1 and CRITERIA 2 fail, the response body should be an array containing the messages 'MRP should be less than equal to the Price' at the 0th index, and the message 'Stock count is 0' at the 1st index.
    - if all the criterias pass, the matching product's isPublished field is be set to true and the response code is 204 with no response body.
    - you can assume that the ID passed to the request will always be valid


- DELETE, PUT request to /products/<id>:
    - the response code is 405 because the API does not allow deleting or modifying products for any id value

You should complete the given project so that it passes all the test cases when running the provided unit tests. The project by default supports the use of the SQLite3 database.

## Environment 
- Node Version: ^12.18.2
- Ionic Version: 6
- Angular Version: 15


**Commands**

- install:
```bash
npm install
```
- run: 
```bash
npm start
```
- build:
```bash
npm build
```
- build production:
```bash
npm build:production
```
- test: 
```bash
npm test
```
