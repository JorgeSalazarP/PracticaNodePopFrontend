import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import NewAdFormController from './controllers/NewAdFormController.js';

window.addEventListener("DOMContentLoaded", event=>{

    const loaderElement= document.querySelector('.lds-ring');
    const loaderController = new LoaderController(loaderElement);

    const errorElement= document.querySelector('.global-errors');
    const errorController = new ErrorController(errorElement);

    const formElement = document.querySelector('form');
    new NewAdFormController(formElement);




});


