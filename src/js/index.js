import DataService from './API/DataService';
import Renderer from './Renderer';
import Initializer from './Initializer';
import { API_KEY as apiKey } from './stuff/constants';

const dataService = new DataService({
  type: 'fetch',
  apiKey,
});

const renderer = new Renderer();

const app = new Initializer(renderer, dataService);

app.initialize();

console.log('init');
