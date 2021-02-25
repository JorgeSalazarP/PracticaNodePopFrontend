import { errorView } from '../views.js';
import BaseController from './BaseController.js';
import pubSub from '../services/Pubsub.js';

export default class ErrorController extends BaseController{

    constructor(element){
        super(element);
        pubSub.subscribe('error', error=>{
            this.showError(error);
        });
    }

    showError(errorMessage){

        this.element.innerHTML = errorView(errorMessage);
        this.element.classList.remove('hidden');
        this.element.addEventListener('click', event=>{

            const button = document.querySelector('.delete');
            if (event.target == this.element || event.target.classList.contains('delete')){
                
                this.element.classList.add('hidden');
            }

        });

    }

}