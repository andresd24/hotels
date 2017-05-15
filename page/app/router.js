
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', {path: "/about"});
  this.route('index', {path: "/"});
  /* En la carpeta note se encuentra el template show que recibira un parametro id */
  this.resource('note', function() {
    this.route('show', {
      path: ":note_id"
    });
  });
});

export default Router;
