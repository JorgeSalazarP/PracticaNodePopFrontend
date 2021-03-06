import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { adView } from '../views.js';




export default class AdListController extends BaseController{

    constructor(element){
        super(element);

        this.subscribe(this.events.SEARCH, query=>{

            this.loadAds(query);

        });
    }

    render(ads){
        this.element.innerHTML = '';
        for (const ad of ads){
            const article = document.createElement('article');
            article.innerHTML = adView(ad);
 
            
            this.element.appendChild(article);
            article.addEventListener('click',e=>{
            
                window.location.href= `/detail.html?=${ad.id}`;
                
            });
        
        }

    }


    async loadAds(query=null) {

        this.publish(this.events.START_LOADING,{});
        try {
            const ads = await dataService.getAds(query);
            this.render(ads);

        } catch (error) {

            this.publish(this.events.ERROR,error);
        }finally{
         
            this.publish(this.events.FINISH_LOADING,{});
        }

    }

 
}