import * as services from './services';
const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const providers = [
  ...mapValuesToArray(services)
];
export { routes } from './routes';
export { App } from './app';
