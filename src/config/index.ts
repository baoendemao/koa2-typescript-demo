import devConfig from './dev';
import prodConfig from './prod';
import defaultConfig from './default';

interface Config {
  port: number
}

let config: Config 

switch(process.env.NODE_ENV) {
  case 'development':
    config = devConfig;
    break;
  case 'production':
    config = prodConfig;
    break;
  default:
    config = defaultConfig;
    break;
}

export default config;