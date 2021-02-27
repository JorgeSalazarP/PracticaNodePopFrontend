
export const adView = (ad) => {

  let imgHTML = '';

  if(ad.image){

    imgHTML = `<div class="card-image">
    <figure class="image is-4by3">
    <img src="${ad.image}" alt="Placeholder image">
    </figure>
    </div>`;

  }

    return `<div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">${ad.name}</p>
          </div>
        </div>
        <div class="content">${ad.price}€</div>
        <div class="content">${ad.buy}</div>
      </div>
      ${imgHTML}
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