import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		console.log(params);
		// this.store.findRecord('friend', params.friend_id);
		return this.store.findRecord('friend', params.friend_id);
	}
});
