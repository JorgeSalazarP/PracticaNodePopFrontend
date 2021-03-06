import DetailController from './controllers/DetailController.js';
import ErrorController from './controllers/ErrorController.js';
import LoaderController from './controllers/LoaderController.js';



window.addEventListener("DOMContentLoaded", ()=>{

    const loaderElement = document.querySelector('.lds-ring');
    const loaderController = new LoaderController(loaderElement);

    const errorElement = document.querySelector('.global-errors');
    const errorController = new ErrorController(errorElement);

    const detailAdElement = document.querySelector('.detail-ad');
    const detailController = new DetailController(detailAdElement);
    detailController.loadDetailAd();



   



});