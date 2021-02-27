import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';

export default class DeleteButtonController extends BaseController{

    constructor(element,ad){
        super(element);

        this.element.addEventListener('click', async ev=>{
            const deletedConfirmed = confirm ('¿Estás seguro que quieres borrar el anuncio?');
            if (deletedConfirmed){
                await dataService.deleteAd(ad);
                this.publish(this.events.AD_DELETED,ad);
                
            }
            
            
        });


    }

}