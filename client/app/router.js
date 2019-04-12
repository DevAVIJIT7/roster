import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', { path: '/' });
  this.route('signup');
  this.route('classes');
  this.route('assignments', function() {
  	this.route('index', {path: '/'});
    this.route('new');
    this.route('show', { path: '/:assignment_id' });
  });
});

export default Router;
