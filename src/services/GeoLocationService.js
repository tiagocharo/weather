import axios from "axios";

export default class GeoService {
  constructor() {
    this.app_id = "c63386b4f77e46de817bdf94f552cddf";
  }

  async getCity(lat, long) {
    try {
      const {
        data: {
          results: [components],
        },
      } = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${this.app_id}`
      );
      return Promise.resolve(components.components.city);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
