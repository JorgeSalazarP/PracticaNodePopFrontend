import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { adView } from '../views.js';


export default class AdListController extends BaseController{

    constructor(element){

        super(element);
    }

    render(ads){
        this.element.innerHTML = '';
        for (const ad of ads){
            const article = document.createElement('article');
            article.innerHTML = adView(ad);
            const deleteButton = article.querySelector('button');

            if(deleteButton){ // 'Únicamente para los anuncios del usuario actual

                deleteButton.addEventListener('click', async event =>{
                    const deletedConfirmed = confirm ('¿Estás seguro que quieres borrar el anuncio?');
                    if (deletedConfirmed){
                        await dataService.deleteAd(ad);
                        article.remove(); //borramos al instante el anuncio que ha eliminada el usuario.
                        await this.loadAds();
                    }
                    

                });

            }
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