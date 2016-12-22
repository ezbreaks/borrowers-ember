import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save(model) {
			console.log(model);
			this.transitionToRoute('friends.show', model);
		},
		cancel(model) {
			console.log(model);
			this.transitionToRoute('loans.index', model);
		}
	}
});
