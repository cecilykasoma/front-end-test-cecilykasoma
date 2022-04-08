# Matchesfashion Front End Coding Challenge


## Introduction

The test is broken up into a few steps which will be displayed in the next section.
We ask that you limit the use of libraries, and just implement the code using
JS/HTML & CSS. To fetch the data, please use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). 

## Set Up

We have created a basic node server you can use by installing [node](https://nodejs.org/en/) and running `http-server` in node command prompt in the `src` folder.  

The basic page should be viewable in a browser on `http://localhost:8080/`

## The Problem

Your solution is to be completed within the folder

> src/

There is some generic HTML and CSS there you are welcome to use. 

The app that you are required to build is a simple product listing page. Product infomation should be fetched from the sub folder

> products/

## The Task

The task is to:
1. Display the first 12 proucts in a grid up to 4 columns wide.
2. Show a load more button that loads an additional 12 products.
3. Make sure the page works on big and small devices (1 or 2 columns on mobile).

Bonus task:
4. Allow the user to sort by price low to high

[EXAMPLE HERE](https://github.com/matchesfashion/intern-tech-tests/blob/master/front-end-test/list-example.png)

Th product JSON looks as follows:

```json
{
        "images": [
            "//assetsprx.matchesfashion.com/img/product/1454160_1_medium.jpg",
            "//assetsprx.matchesfashion.com/img/product/1454160_2_medium.jpg",
            "//assetsprx.matchesfashion.com/img/product/1454160_3_medium.jpg",
            "//assetsprx.matchesfashion.com/img/product/1454160_4_medium.jpg",
            "//assetsprx.matchesfashion.com/img/product/1454160_5_medium.jpg",
            "//assetsprx.matchesfashion.com/img/product/1454160_6_medium.jpg"
        ],
        "name": "Fringed checked wool-blend coat",
        "designer": "Marni",
        "url": "/products/Marni-Fringed-checked-wool-blend-coat-1454160",
        "price": "£1,790",
        "index": 0,
        "code": "1454160"
    }
```


