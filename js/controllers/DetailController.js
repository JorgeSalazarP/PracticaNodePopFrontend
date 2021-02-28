import BaseController from './BaseController.js';
import { adView } from '../views.js';

export default class DetailController extends BaseController{

    constructor(element){
        super(element);
       
        
        
    }
    
    
    renderDetail(ad){

        const article = document.createElement('article');
        article.innerHTML = adView(ad);
        console.log(this.element);
       // console.log(ad);
        
        //document.querySelector('.detail-ad').appendChild(article);
        

    }
    


    
}