export default {

    getAds : async function () {
       
        const response = await fetch(url);
        if (response.ok){

            const data = response.json();
            return data;
        }else{
            throw new Error (`HTTP Error:`,response.status);
        }

        

    }


}