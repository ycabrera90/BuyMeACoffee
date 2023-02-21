<p align="center">
  <a href="https://eip-buy-me-a-coffee.herokuapp.com/payment/buy-me-a-coffee"
    ><img
      src="https://eip-buy-me-a-coffee.herokuapp.com/img/project-landin-page.png"
      alt="EIP Studios"
     />
  </a>
</p>



# Buy me a coffee
This in a small [endpoint](https://eip-buy-me-a-coffee.herokuapp.com/payment/buy-me-a-coffee) to interact with DLocal services for make online payments.

## Built with
* [EJS](https://ejs.co/) - Template engine
* [Node.Js](https://nodejs.org/en/docs/) - JavaScript runtime environment
* [Express](https://www.mongodb.com/atlas) - Node.js Framework!
* [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - Dependencies handler

## Frontend Side
Te frontend side of this project is rendered in the server side using the template engine [EJS](https://ejs.co/). Yo can see the final deployment in the following [link](https://eip-buy-me-a-coffee.herokuapp.com/payment/buy-me-a-coffee).

## Clone and run app
These instructions will allow you to obtain a copy of the project on your local machine for development and test purposes.
Look the [**deployment**](https://eip-buy-me-a-coffee.herokuapp.com/payment/buy-me-a-coffee) so you can see the final result.

#### Pre-requirements
For run this project you must have installed globally the following packages in your local machine

* [NodeJs](https://nodejs.org/en/) 
* [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

#### Clone and prepare.
For clone and serve the project you need open a terminal, go to the folder which you want to work and put the follows commands
```
git clone https://github.com/ycabrera90/BuyMeACoffee.git

cd BuyMeACoffee

npm install
```

After that you have to create a file called **nodemon.json** with the follow structure:
```
{
  "env": {
    "DLOCAL_API_KEY": "<your DLocal api key>",
    "DLOCAL_API_SECRET": "<your DLocal api secret>",
  }
}
```
You can get the **DLocal api key** and **DLocal api secret** in you account of [DLocal Go](https://dashboard.dlocalgo.com/).

#### Serve the app.
For serve the app you need to run the following command:
```
npm run dev
```

## Authors
* [**Yosniel Cabrera**](https://www.linkedin.com/in/eip-studios/) - *React Developer* 
  
## License
This project is **public** and only for academic purposes.

## Read More 🎁
* You can find the documentation of the APIS in the following [link](https://docs.dlocalgo.com/integration-api/).

<br>

[⬆ Back to top](#buy-me-a-coffee)<br>
  
---
yosniel.ch@gmail.com

