import dataService from './services/DataService.js';
import AdListController from './controllers/AdListController.js';
import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';


window.addEventListener("DOMContentLoaded", (event) => {

    const loaderElement= document.querySelector('.lds-ring');
    const loaderController = new LoaderController(loaderElement);
    
    const adlistElement = document.querySelector('ad-list');
    const adListController = new AdListController(adlistElement);
    
    adListController.loadAds();
    
    const errorElement= document.querySelector('.global-errors');
    const errorController = new ErrorController(errorElement);
 
    



});
