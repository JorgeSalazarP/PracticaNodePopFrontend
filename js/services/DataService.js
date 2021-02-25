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

    registerUser: async function (user) {

        const config = {
            method: 'POST',
            body: user
        };
        const url = `${BASE_URL}/auth/register`;
        const response = await fetch(url,config);
        if(response.ok){
            const data = response.json();
            return data;
        }else{
            throw new Error(data);
        }

    }


}