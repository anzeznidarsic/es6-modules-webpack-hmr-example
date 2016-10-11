import { backgrounds, fonts } from './settings';
import devs from './developers';

document.getElementById('title').style.background = backgrounds.title;

document.getElementById('panel').innerHTML = devs.map(dev => `<li>${dev}</li>`).join('');

// accept replacement modules
if (module.hot) {
    module.hot.accept();
}