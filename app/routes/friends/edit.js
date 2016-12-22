import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('friend', params.friend_id);
	},

	resetController(controller, isExiting, transition) {
		var model = controller.get('model');
	  if (isExiting) {
		console.log('Exiting from Reset Controller');
	    model.rollbackAttributes();
		}
	} 
});
