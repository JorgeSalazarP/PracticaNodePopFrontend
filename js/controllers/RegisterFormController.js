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

                if(input.validity.valid){
                    input.classList.add('is-succes');
                    input.classList.remove('is-danger');
                }else{

                    input.classList.add('is-danger');
                    input.classList.remove('is-succes');
                }

                if (this.element.checkValidity()) {
                    button.removeAttribute('disabled');
                }else{
                    button.setAttribute('disabled',true);
                }
            });
        });

    }


}