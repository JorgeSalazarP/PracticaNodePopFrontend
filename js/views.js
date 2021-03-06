
export const adView = (ad) => {

    
  
  let deleteButtonHTML = '';

  if(ad.canBeDeleted){
    deleteButtonHTML = '<button class="button is-danger">Delete</button>';
  }

  let imgHTML = '';

  
  if(ad.image){
    
    imgHTML = `<div class="card-image">
    <figure class="image">
    <img src="${ad.image}" alt="Placeholder image">
    </figure>
    </div>`;

  }

    return `<div class="card">
      ${imgHTML}
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">${ad.name}</p>
          </div>
        </div>
        <div class="content price" name="price">${ad.price}€</div>
        <div class="content buy">${ad.buy}</div>
        
      </div>
     
    </div>`;

};
export const errorView = (errorMessage) => {

    return ` <article class="message is-danger">
    <div class="message-header">
      <p>Error</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
     ${errorMessage}
    </div>
  </article>`;

};



export const adViewDetail = (detailAd) => {


  
  let deleteButtonHTML = '';

  if(detailAd.canBeDeleted){
    deleteButtonHTML = '<button class="button is-danger">Delete</button>';
  }

  let imgHTML = '';

  
  if(detailAd.image){
    
    imgHTML = `<div class="card-image">
    <figure class="image">
    <img src="${detailAd.image}" alt="Placeholder image">
    </figure>
    </div>`;

  }

    return `<div class="card">
      ${imgHTML}
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">${detailAd.name}</p>
          </div>
        </div>
        <div class="content price" name="price">${detailAd.price}€</div>
        <div class="content buy">${detailAd.buy}</div>
        
      </div>
      ${deleteButtonHTML}
     
    </div>`;

};