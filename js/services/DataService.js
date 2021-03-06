const BASE_URL ='http://127.0.0.1:8000';
const TOKEN_KEY = 'token';

export default {

    getAds : async function (query=null) {
        
        //const currentUser = await this.getUser();

        let url = `${BASE_URL}/api/messages?_expand=user&_sort=id&_order=desc`;
        if(query){
            url +=`&q=${query}`;
        }

        const response = await fetch(url);
        if (response.ok){

            const data = await response.json();
            return data.map(ad=>{
                const user = ad.user || {};
                return {
                   
                    id: ad.id,
                    name: ad.name.replace(/(<([^>]+)>)/gi, ""),
                    price: ad.price,
                    buy: ad.buy ? 'Buy' : 'Sell',
                    username: user.username || 'Desconocido',
                    image: ad.image || null,
                   // canBeDeleted: currentUser ? currentUser.userId === ad.userId : false

                }

            });
        }else{
            throw new Error (`HTTP Error:,${response.status}`);
        }

        

    },
    post: async function(url,postData, json=true){

        return await this.request('POST',url,postData,json) ;
    },

    delete: async function(url) {
        return await this.request('DELETE', url, {});
    },

    put: async function(url,putData,json=true){

        return await this.request('PUT',url,putData,json);
    },
    
    request: async function (method,url,postData,json=true) {
        
        const config = {
            method: method,
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

    },

    getUser: async function(){

        try {
            const token = await this.getToken();
            const tokenParts = token.split('.');
            if (tokenParts.length !== 3) {
                return null;
            }
            const payload = tokenParts[1]; 
            const jsonStr = atob(payload); // descodificamos el base64
            const { userId, username } = JSON.parse(jsonStr); // parseamos el JSON del token que ya está descodificado
            return { userId, username };

        } catch (error) {
            
            return null;
        }
        
    },

    deleteAd: async function(ad) {
        const url = `${BASE_URL}/api/messages/${ad.id}`;
        return await this.delete(url);
    },

    getDetail : async function (idAd) {
        
        const currentUser = await this.getUser();
        const url = `${BASE_URL}/api/messages?id=${idAd}`;
        const response = await fetch(url);
        
        if (response.ok){
            const data = await response.json();
            const detailAd = {};
            data.map(ad=>{
                detailAd.id = ad.id,
                detailAd.name = ad.name,
                detailAd.price = ad.price,
                detailAd.buy = ad.buy ? 'Buy' : 'Sell',
                //username: user.username || 'Desconocido',
                detailAd.image = ad.image,
                detailAd.canBeDeleted = currentUser ? currentUser.userId === ad.userId : false
                

            });
         
            return detailAd;
            
           
         
        }else{
            throw new Error (`HTTP Error:,${response.status}`);
        }

        

    },


}