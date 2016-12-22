import Ember from 'ember';

export default Ember.Component.extend({
	// By default the store is not injected into components, so we use
  // the "inject.service" helper to make it available.
  store: Ember.inject.service(),
  articles: Ember.computed({
  	get() {
  		// Since we are using Ember.inject.service, we need to call the
      // store using the get helper
     return this.get('store').findAll('article');
  	}
  }).readOnly(),

  save() {
  	// We probabily want to very here that the
  	// model has an article before saving

    console.log('Loans Componenet Save action');

    this.get('model').save().then((model) => {
      this.back(model.get('friend'));
    }, () => {
      this.set('errorMessage', 'there was something wrong saving the loan');
    });
    
  },

  cancel() {
    console.log('Loans Componenet CANCEL action');
  	this.back(this.get('model.friend'));
  }

});


