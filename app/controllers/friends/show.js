import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    delete(friend) {
    	console.log(friend);
      friend.destroyRecord().then(() => {
        this.transitionToRoute('friends.index');
      });

    }
	}


});



