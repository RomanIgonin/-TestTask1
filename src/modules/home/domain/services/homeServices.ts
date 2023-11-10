import Config from 'react-native-config';
import axios from 'axios';

class HomeServices {
  public async getPhotos() {
    console.log('getPhotos');
    return axios
      .get(Config.API_URL)
      .then(response => response.data)
      .catch(error => console.error('getPhotos: ' + error));
  }
}

const homeServices = new HomeServices();
export default homeServices;
