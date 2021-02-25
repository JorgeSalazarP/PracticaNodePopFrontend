import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { adView } from '../views.js';


export default class AdListController extends BaseController{

    constructor(element){

        super(element);
    }

    render(ads){

        for (const ad of ads){

            const article = document.createElement('article');
            article.innerHTML = addView(ad);
            this.element.appendChild(article);
        }

    }


    async loadAds() {

        this.publish(this.events.START_LOADING,{});
        try {
            const ads = await dataService.getAds();
            this.render(ads);

        } catch (error) {

            this.publish(this.events.ERROR,error);
        }finally{

            this.publish(this.events.FINISH_LOADING,{});
        }

    }
}