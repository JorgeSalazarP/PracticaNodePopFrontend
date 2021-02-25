import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { adView } from '../views.js';
import pubSub from '../services/Pubsub.js';

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

        pubSub.publish('startLoading',{});
        try {
            const ads = await dataService.getAds();
            this.render(ads);

        } catch (error) {

            pubSub.publish('error',error);
        }finally{

            pubSub.publish('finishLoading',{});
        }

    }
}