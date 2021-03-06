
export const adView = (ad) => {

    
  
  let deleteButtonHTML = '';

  if(ad.canBeDeleted){
    deleteButtonHTML = '<button class="button is-danger">Delete</button>';
  }

  let imgHTML = '';

  
//   if(ad.image){
    
//     imgHTML = `<div class="card-image">
//     <figure class="image">
//     <img src="${ad.image}" alt="Placeholder image">
//     </figure>
//     </div>`;

//   }
 
//   return `<article class="column">
//   <div class="card">
//   ${imgHTML}
//       <div class="card-content">
//       <div class="media">
//         <div class="media-content">
//           <p class="title is-4">${ad.name}</p>
//         </div>
//       </div>
//       <div class="content price" name="price">${ad.price}€</div>
//       <div class="content buy">${ad.buy}</div>
//       <div class="content">
//                 <div class="placeholder"></div>
//                 <div class="placeholder"></div>
//                 <div class="placeholder"></div>
//                 <div class="placeholder"></div>
//             </div>
//   </div>
// </article>`;




return `<div class="card">
<div class="card-image">
  <figure class="image is-4by3">
    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
  </figure>
</div>
<div class="card-content">
  <div class="media">
    <div class="media-left">
      <figure class="image is-48x48">
        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="media-content">
      <p class="title is-4">John Smith</p>
      <p class="subtitle is-6">@johnsmith</p>
    </div>
  </div>

  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
    <a href="#">#css</a> <a href="#">#responsive</a>
    <br>
    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
  </div>
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
     
    </div>`;

};