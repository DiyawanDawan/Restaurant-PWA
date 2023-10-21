import RestaurantSource from '../../data/source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return /* html */`
    <div class="explore-list">
      <h1 class="explore-title">Cari Restaurant</h1>
    </div>
    <div id="restaurants" class="restaurants">
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.HomeRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
