import BaseController from './BaseController.js';

export default class RegisterFormController extends BaseController{

    constructor(element){
        super(element);
        this.attachEventListener();
    }

    attachEventListener(){

        this.element.addEventListener('submit', event=>{

            event.preventDefault();

        });

        this.element.querySelectorAll('input').forEach(input=>{

            const button = this.element.querySelector('button');
            input.addEventListener('keyup', event=>{

                if (this.element.checkValidity()) {
                    button.removeAttribute('disabled');
                }else{
                    button.setAttribute('disabled',true);
                }
            });
        });

    }


}