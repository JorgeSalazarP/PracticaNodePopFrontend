import BaseController from './BaseController.js';
import dataService from '../services/DataService.js'
import { adViewDetail } from '../views.js';
import DeleteButtonController from './DeleteButtonController.js';

export default class DetailController extends BaseController{

    constructor(element){
        super(element);           
        this.subscribe(this.events.AD_DELETED,()=>{
            console.log('hola5');
        })
     
    }
    
    async renderDetail(detailAd){
        
        const article = document.createElement('article');
        article.innerHTML = adViewDetail(detailAd);

        const deleteButton = article.querySelector('button');

        if (deleteButton) {
            new DeleteButtonController(deleteButton, detailAd);
        }
        this.element.appendChild(article);

    }
    
    async loadDetailAd() {

        this.publish(this.events.START_LOADING,{});
        try {
            
            const queryParams = window.location.search.replace('?','');
            const queryParamsParts = queryParams.split('=');
            const detailAd = await dataService.getDetail(queryParamsParts[1]);
            
            if (!detailAd.id){
                console.log('hola');
            }
            this.renderDetail(detailAd);

        } catch (error) {

            this.publish(this.events.ERROR,error);
        }finally{
         
            this.publish(this.events.FINISH_LOADING,{});
        }

    }
}