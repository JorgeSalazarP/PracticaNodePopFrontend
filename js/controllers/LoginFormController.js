import dataService from '../services/DataService.js';
import BaseController from './BaseController.js';

export default class RegisterFormController extends BaseController{

    constructor(element){
        super(element);
        this.attachEventListener();
    }

    attachEventListener(){

        this.element.addEventListener('submit', async event=>{
            event.preventDefault();

            const user = {

                username: this.element.elements.username.value,
                password: this.element.elements.password.value
            };
            
            this.publish(this.events.START_LOADING,{});
            try {
                
                const data = await dataService.LoginUser(user);
                alert('Usuario creado con éxito');
                window.location.href='/login.html';

            } catch (error) {
                this.publish(this.events.ERROR,error);
            }finally{

                this.publish(this.events.FINISH_LOADING,{});
            }

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