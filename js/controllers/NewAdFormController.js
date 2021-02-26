import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';

export default class NewAdFormController extends BaseController{

    constructor(element){
        super(element);
        this.checkUserIsLogged();
        this.attackEventListener();
        this.focusInTextArea();
    }

    async checkUserIsLogged(){

        const userIsLogged = await dataService.isUserLogged();
        if(!userIsLogged){

            window.location.href = '/login.html';

        } else{

            this.publish(this.events.FINISH_LOADING,{});

        }


    }
    focusInTextArea(){
        const textarea = this.element.querySelector('textarea');
        textarea.focus();
    }

    attackEventListener(){

        const textarea = this.element.querySelector('textarea');

        textarea.addEventListener('keyup',()=>{

            const button = document.querySelector('button');

            if(this.element.checkValidity()){

                button.removeAttribute('disabled');
            
            }else{
                button.setAttribute('disabled',true);
            }

        });

    }


}