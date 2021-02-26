import dataService from '../services/DataService.js';
import BaseController from './BaseController.js';

export default class NewAdOrLoggedController extends BaseController{

    constructor(element){
        super(element);
        this.checkIfUserIsLogged();
    }

    async checkIfUserIsLogged(){

        const userIsLogged = await dataService.isUserLogged();
        if(userIsLogged){

            const newAdButton = this.element.querySelector('.new-ad-button');
            newAdButton.classList.remove('is-hidden');

        }else{

            const loginAdButton = this.element.querySelector('.login-register-buttons');
            loginAdButton.classList.remove('is-hidden');

        }

    }



}