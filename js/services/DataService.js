const BASE_URL ='http://127.0.0.1:8000';
const TOKEN_KEY = 'token';

export default {

    getAds : async function () {
       
        const url = `${BASE_URL}/api/messages?_expand=user&_sort=id&_order=desc`;
        const response = await fetch(url);
        if (response.ok){

            const data = await response.json();
            return data.map(ad=>{
                const user = ad.user || {};
                return {
                   
                    name: ad.name.replace(/(<([^>]+)>)/gi, ""),
                    price: ad.price,
                    buy: ad.buy,
                    username: user.username || 'Desconocido',
                    image: ad.image || null

                }

            });
        }else{
            throw new Error (`HTTP Error:,${response.status}`);
        }

        

    },
    
    post: async function (url,postData,json=true) {
        
        const config = {
            method: 'POST',
            headers: {},
            body: null
        };

        if(json){
            config.headers['Content-type'] = 'application/json';
            config.body = JSON.stringify(postData);
        }else{
            
            config.body = postData;
        }

        const token = await this.getToken();
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(url,config);
        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            throw new Error(data.message || JSON.stringify(data));
        }

    },

    registerUser: async function (user) {

        
        const url = `${BASE_URL}/auth/register`;
        return await this.post(url,user);
        
    },

    loginUser: async function (user) {
        
       
        const url = `${BASE_URL}/auth/login`;
        return await this.post(url,user);

    },

    saveToken: async function (token) {
        
        localStorage.setItem(TOKEN_KEY,token);
        
    },

    getToken: async function () {
        
        return localStorage.getItem(TOKEN_KEY);
        
    },

    isUserLogged: async function () {
        
        const token = await this.getToken();
        return token !== null;

    },

    saveAd: async function (newAd) {
        
        const url = `${BASE_URL}/api/messages`;
        if(newAd.image){ // Si hay imagen

            const imageURL = await this.uploadImage(newAd.image);
            newAd.image = imageURL;

        }
        return await this.post(url,newAd);


    },

    uploadImage: async function (image) {
        
        const form = new FormData();
        form.append('file',image);
        const url = `${BASE_URL}/upload`;
        const response = await this.post(url,form,false);
        return response.path || null;

    }


}