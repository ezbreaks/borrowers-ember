import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('friend');
	},
	activate() {
		console.log('----- activate hook called -------');
	},
	deactivate() {
		console.log('----- deactivate hook called ------');
	},
	resetController: function(controller, isExiting, transition) {
		// Grab the model from the controller
		var model = controller.get('model');

		// Because we are leaving the Route we verify if the model is in
		// 'isNew' state, which means it wasn't save to the backend

		if (model.get('isNew')) {
			// Call DS#destroyRecord() which removes it from the store
			model.destroyRecord();
			console.log('----- Destroy Record on Reset Controller hook  -----');
		}

		if (isExiting) {
			console.log('----- resetController hook called -----');
		}
	}
});
