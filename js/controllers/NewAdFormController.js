import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';

export default class NewAdFormController extends BaseController{

    constructor(element){
        super(element);
        this.checkUserIsLogged();
        this.attackEventListener();
    }

    async checkUserIsLogged(){

        const userIsLogged = await dataService.isUserLogged();
        if(!userIsLogged){

            window.location.href = '/login.html';

        } else{

            this.publish(this.events.FINISH_LOADING,{});

        }


    }

    attackEventListener(){


    }


}