import request from '../requests';

export default class DataService {
  constructor({type, apiKey}) {
    if (type === 'fetch') {
      this.getData = this.fetchData.bind(this);
    } else {
      this.getData = () => console.log('This type of representing data is not maintainable for now.');
    }
    this.apiKey = apiKey;
  }

  fetchData(...data) {
    return request({apiKey: this.apiKey, ...data[0]});
  }
}
