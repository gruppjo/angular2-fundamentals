import * as allServices from './services';
const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const services = [
  ...mapValuesToArray(allServices)
];
export { routes } from './routes';
export { App } from './app';
