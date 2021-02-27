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
         
            window.location.href = '/login.html?next=new-ad.html';

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
        const button = document.querySelector('button');

        textarea.addEventListener('keyup',()=>{

            if(this.element.checkValidity()){

                button.removeAttribute('disabled');
            
            }else{
                button.setAttribute('disabled',true);
            }

        });


        this.element.addEventListener('submit',async event=>{

            event.preventDefault();

            const newAd = {
                name: this.element.elements.message.value
            };

            this.publish(this.events.START_LOADING,{});

            try {
                
                await dataService.saveAd(newAd);
                window.location.href = '/?mensaje=newadOK';

            } catch (error) {
                
                this.publish(this.events.ERROR,error);
            }finally{
                this.publish(this.events.FINISH_LOADING);
            }


        });

    }


}