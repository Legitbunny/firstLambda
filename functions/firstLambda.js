'use strict';

module.exports.handler = async (event) => {
    console.log('Event:', event);
  
    const productDetails = {
       name: event.titleVariant ,
       productNumber: event?.sku,
       productGroup: {
         productGroupNumber: 1
       },
       salesPrice: parseInt(event?.price),
       description: event.titleProd
    };
     
        const url = "https://restapi.e-conomic.com/products";
    const options = {
       method: 'POST',
       headers: {
         "x-appsecrettoken": "nntAGvRf6nBtnqevEySMS5VXK8vo0CymIKHXHFXNjok",
         "x-agreementgranttoken": "cjDPM04dyBm8VyLPvMXJK1DnmQeZmyEghxtNv1kRocg1",
         "content-type": "application/json",
       },
       body: JSON.stringify(productDetails)
    };
     
    try {
       const response = await fetch(url, options);
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
       const data = await response.json();
       console.log('Response data:', data);
    //   console.alert("Product added to E-conomic successfully");
    } catch (error) {
       console.error('Fetch error:', error);
    }

};
