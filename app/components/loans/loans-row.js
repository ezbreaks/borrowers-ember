import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	loan: null, //passed in
	// stateChanged: Ember.observer('loan.returned', function() {
	// 	var loan = this.get('loan');
	// 	console.log('OMG EXPENSIVE operation because loan state changed');
	// }) 
	init() {
		this._super(...arguments);
		this.addObserver('loan.returned', this, this.stateChanged);
	},
	stateChanged() {
		console.log('OMG EXPENSIVE operation because loan state changed');
	}
});
