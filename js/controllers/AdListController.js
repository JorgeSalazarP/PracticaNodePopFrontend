import BaseController from "./BaseController";

import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';

export default class AdListController extends BaseController{

    constructor(element){

        super(element);
    }

    postAd() {

        try {
            const ads = await dataService.getAds();
            
        } catch (error) {
            
        }

    }
}