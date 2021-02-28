import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';

const VALIDATION_PRICE =  /^[0-9]+([.])?([0-9]+)?$/;

export default class NewAdFormController extends BaseController{

    constructor(element){
        super(element);
        this.checkUserIsLogged();
        this.attackEventListener();
        
        this.focusInTextDescriptionAd();
    }

    async checkUserIsLogged(){

            const userIsLogged = await dataService.isUserLogged();
            if(!userIsLogged){
            
                window.location.href = '/login.html?next=new-ad.html';

            } else{

                this.publish(this.events.FINISH_LOADING,{});

            }


    }

    focusInTextDescriptionAd(){
        const textDescription = this.element.querySelector('#description');
        textDescription.focus();
    }


    validationForm(){
        
        const textDescription = this.element.querySelector('#description');
        const textPrice = this.element.querySelector('#price');
        
        if(textDescription.value.trim()==='' && textPrice.value.trim()===''){
            document.querySelector('.empty_description').removeAttribute('hidden');
            document.querySelector('.empty_price').removeAttribute('hidden');
            return false;
        }
        if(textDescription.value.trim()===''){
           
            document.querySelector('.empty_description').removeAttribute('hidden');
            document.querySelector('.empty_price').setAttribute('hidden',true);
            document.querySelector('.only_numbers').setAttribute('hidden',true);
            return false;
        }
        if(textPrice.value.trim()===''){
           
            document.querySelector('.empty_price').removeAttribute('hidden');
            document.querySelector('.empty_description').setAttribute('hidden',true);
            return false;
        }

        if(!VALIDATION_PRICE.test(textPrice.value)){

            document.querySelector('.empty_description').setAttribute('hidden',true);
            document.querySelector('.only_numbers').removeAttribute('hidden');
            document.querySelector('.empty_price').setAttribute('hidden',true);
            return false;
            
        }
        
        return true; // FORM VALIDADO
        
    }

    attackEventListener(){

    
        this.element.addEventListener('submit', async e=>{

            e.preventDefault();
            
            
            if(this.validationForm){
                
                let isBuy = false;

                if(this.element.elements.buy_sell.value === 'Buy'){
                    
                    isBuy = true;
                }                    

                const newAd = {
                    name: this.element.elements.description.value,
                    price: parseFloat(this.element.elements.price.value),
                    buy: isBuy,
                    image : null

                }

                if (this.element.elements.file.files.length > 0){

                    newAd.image = this.element.elements.file.files[0];
                
                }
                
                this.publish(this.events.START_LOADING);

   
                try {
                
                    await dataService.saveAd(newAd);
                    window.location.href = '/?mensaje=newadOK';
                   
                
                } catch (error) {
                                
                    this.publish(this.events.ERROR,error);
                }finally{
                    this.publish(this.events.FINISH_LOADING);
                }

            }
            
           

        });

    }



}