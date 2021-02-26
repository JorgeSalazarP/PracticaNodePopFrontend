const BASE_URL ='http://127.0.0.1:8000';
const TOKEN_KEY = 'token';

export default {

    getAds : async function () {
       
        const url = `${BASE_URL}/api/messages?_expand=user`;
        const response = await fetch(url);
        if (response.ok){

            const data = await response.json();
            return data.map(ad=>{
                return {
                   
                    name: ad.name,
                    price: ad.price,
                    buy: ad.buy,
                    username: ad.user.username

                }

            });
        }else{
            throw new Error (`HTTP Error:,${response.status}`);
        }

        

    },
    
    post: async function (url,postData) {
        
        const config = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(postData)
        };

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

    }


}