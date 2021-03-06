import ErrorController from './controllers/ErrorController.js';
import LoaderController from './controllers/LoaderController.js';
import RegisterFormController from './controllers/RegisterFormController.js';

window.addEventListener("DOMContentLoaded", ()=>{

    const loaderElement = document.querySelector('.lds-ring');
    const loaderController = new LoaderController(loaderElement);

    const errorElement = document.querySelector('.global-errors');
    const errorController = new ErrorController(errorElement);

    const formElement = document.querySelector('form');
    new RegisterFormController(formElement);
















});