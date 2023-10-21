import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantItemTemplate = (restaurant) => /* html */ `
<div class="list-item" tabindex="0">
  <img class="list-thumb" src="${restaurant.pictureId ? API_ENDPOINT.IMG.S + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" crossorigin="anonymous">
  <div class="list-city">
    <h1 class="card-link"><a class="link-page" href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
    <h3>Name ${restaurant.city}</h3>     
    <div class="rating">
    <p>⭐${restaurant.rating}</p>
    </div>
  </div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => /* html */ `
<div class="detail-card" tabindex="0">
  <img class="detail-thumb" src="${restaurant.pictureId ? API_ENDPOINT.IMG.M + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" crossorigin="anonymous">
  <div class="content-detail">
    <div class="rating">
      <p>⭐${restaurant.rating}</p>
    </div>
    <div class="detail-name">
      <h3>${restaurant.name}</h3>
    </div>
    <h2 class="detail-categories">Kategori: ${restaurant.categories[0].name}</h2>
    <h3 class="detail-city">Kota: ${restaurant.city}</h3>
    <h4 class="detail-address">Alamat</h4>
    <p> ${restaurant.address}</p>
    <p class="detail-desc">${restaurant.description}</p>
    <div class="detail-menus">
      <div class="detail-foods">
        <h5>Menu Makanan</h5>
        <ul>
          <li>${restaurant.menus.foods[0].name}</li>
          <li>${restaurant.menus.foods[1].name}</li>
          <li>${restaurant.menus.foods[2].name}</li>
          <li>${restaurant.menus.foods[3].name}</li>
        </ul>
      </div>
      <div class="detail-drinks">
        <h5>Menu Minuman</h5>
        <ul>
          <li>${restaurant.menus.drinks[0].name}</li>
          <li>${restaurant.menus.drinks[1].name}</li>
          <li>${restaurant.menus.drinks[2].name}</li>
          <li>${restaurant.menus.drinks[3].name}</li>
        </ul>
      </div>
    </div>
    <div class="detail-review">
      <h6>Hasil Review</h6>
      <p>"${restaurant.customerReviews[0].review}"</p>
      <p>Oleh: ${restaurant.customerReviews[0].name} (${restaurant.customerReviews[0].date})</p>
    </div>

  </div>
  <form>
  <h1 class="review">Review Restaurant</h1>
  <div class="review-form">
    <div class="form-input">
      <label for="name" class="label">Name:</label>
      <input type="text" id="name" name="name" placeholder="Your Name" class="input-text">
    </div>
    <div class="form-input">
      <label for="rating" class="label">Rating:</label>
      <input type="number" id="rating" name="rating" min="1" max="5" class="input-number">
    </div>
      <div class="form-reviw">
      <label for="review" class="label">Review:</label>
      <textarea id="review" name="review" placeholder="Your Review" class="textarea"></textarea>
    </div>
    <button type="submit" class="submit-button">Submit Review</button>
  </div>
  </form>
</div>
`;

const createLikeButtonTemplate = () => /* html */ `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => /* html */ `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate,
  createLikeButtonTemplate, createLikedButtonTemplate,
};
