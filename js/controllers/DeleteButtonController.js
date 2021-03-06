import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';

export default class DeleteButtonController extends BaseController{

    constructor(element,detailAd){
        super(element);

        this.element.addEventListener('click', async e =>{

            const deleteConfirmed = confirm('¿Está seguro que quiere borrar el anuncio?');
            if (deleteConfirmed) {
                await dataService.deleteAd(detailAd);
                this.publish(this.events.AD_DELETED);
            }
            
        });

    }

}