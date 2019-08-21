# Laurence Taylor Personal Site

## The Goal

* To build a clear, nicely designed website using unfamiliar technology.

* To practice styling a page from scratch.

## How to Use

* The site is available on [surge](http://wary-farm.surge.sh/), or (hopefully) at [laurence.tech](http://laurence.tech/). Alternatively:

* Clone this repository.

* Make sure you have [node](https://nodejs.org/en/download/) installed.

* Run `npm install` from your command line to install dependencies.

* Run `npm install -g gatsby-cli` to install the gatsby CLI.

* Run `gatsby develop`, then open a web browser and visit localhost:8000.

![index screenshot](src/imgs/screenshot-1.png)


![cv screenshot](src/imgs/screenshot-2.png)


![contact screenshot](src/imgs/screenshot-3.png)

## Approach

* I was unfamiliar with Gatsby, and somewhat unfamiliar with ReactJS generally so this was a learning process for me. Luckily Gatsby is pretty easy to get started with.

* I didn't test for this project as there is no business logic. I could have feature tested, but given the simplicity of the site I preferred to check the page manually.

* I aimed to make the site as mobile-friendly as possible. Using the site on smaller devices reduces the padding of the main container, and causes it to scale with screen size rather than be a fixed width (usually 800px). Font size in the 'Projects' section of my CV is also reduced to a small, but just about readable 9px. This was my first try at making a website mobile-friendly without any libraries; it would be nice to know if there are standard procedures for doing this.

* I used ESLint to ensure I conformed to style guides.

## Thoughts

* I was really impressed by Gatsby, and I look forward to learning more about ReactJS/ working with it in future.

* Wondering if there a better ways of structuring my CSS. Will have to look into this.

* I experimented with Google Fonts, but I think Futura/ Helvetica suit the site best. Futura does not work on all devices, but Helvetica is web-safe.
