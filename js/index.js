import AdListController from './controllers/AdListController.js';
import LoaderController from './controllers/LoaderController.js';
import ErrorController from './controllers/ErrorController.js';
import NewAdOrLoggedController from './controllers/NewAdOrLoggedController.js';
import SearchController from './controllers/SearchController.js';


window.addEventListener("DOMContentLoaded", (event) => {

    const loaderElement= document.querySelector('.lds-ring');
    const loaderController = new LoaderController(loaderElement);
    
    const adlistElement = document.querySelector('.ad-list');
    const adListController = new AdListController(adlistElement);
    
    adListController.loadAds();
    
    const errorElement= document.querySelector('.global-errors');
    const errorController = new ErrorController(errorElement);

    const newAdElement =  document.querySelector('.new-ad');
    new NewAdOrLoggedController (newAdElement);

    const searchElement = document.querySelector('input[type="search"]');
    new SearchController(searchElement);
 
    



});
