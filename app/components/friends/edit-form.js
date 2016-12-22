import Ember from 'ember';

export default Ember.Component.extend({
	// isValid: Ember.computed(
	// 	'model.email',
	// 	'model.firstName',
	// 	'model.lastName',
	// 	'model.twitter', 
	// 	{
	// 		get() {
	// 			return !Ember.isEmpty(this.get('model.email')) &&
	// 			!Ember.isEmpty(this.get('model.firstName')) &&
	// 			!Ember.isEmpty(this.get('model.lastName')) &&
	// 			!Ember.isEmpty(this.get('model.twitter'));
	// 		}
	// 	}
	// ),

	hasEmail: Ember.computed.notEmpty('model.email'),
	hasFirstName: Ember.computed.notEmpty('model.firstName'),
	hasLastName: Ember.computed.notEmpty('model.lastName'),
	hasTwitter: Ember.computed.notEmpty('model.twitter'),
	isValid: Ember.computed.and(
		'hasEmail',
		'hasFirstName',
		'hasLastName',
		'hasTwitter'
	),



	actions: {
		save() {
			console.log('+-save action in edit form comp');
			// We are calling the save action passed down when rendering the compoenent
			// action=(action "save")
			if (this.get('isValid')) {
				this.get('model').save().then((friend) =>{
					// This function get called if Http reqeust succedds
					// We are calling the save action passed down when rendeing the component
					// action=(action "save")

					return this.save(friend);
				}, (err) => {
					//This getscalled if t he htttp request fails

					this.set('errorMessage', 'there was something worng saving the model' + err );
				});
			} else {
				this.set('errorMessage', 'You have to fill all the fields');
			}
		},
		cancel() {
			console.log('+- cancel action in edit form comp');
			// We are calling the cancel action passed down when rendering the compoenent
			// action=(action "cancel")
			this.cancel(this.get('model'));
		}
	}
});



