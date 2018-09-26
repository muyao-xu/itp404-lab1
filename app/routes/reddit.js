import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model() {
    let url = `https://www.reddit.com/r/javascript.json`;
    return $.getJSON(url);
  }
});

// ES6 class
// export default class extends Route {
//   model(params) {
//     console.log(params);
//   }
// }
