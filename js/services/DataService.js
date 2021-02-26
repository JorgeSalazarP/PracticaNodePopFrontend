const BASE_URL ='http://127.0.0.1:8000';

export default {

    getAds : async function () {
       
        const response = await fetch(url);
        if (response.ok){

            const data = response.json();
            return data;
        }else{
            throw new Error (`HTTP Error:`,response.status);
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
            const data = response.json();
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

    }


}