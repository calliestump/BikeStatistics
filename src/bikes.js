export default class BikeStats {
  static getInfo(manufacturer, color, location, distance) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://bikeindex.org:443/api/v3/search/count?manufacturer=${manufacturer}&colors=${color}&location=${location}&distance=${distance}&stolenness=stolen`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

