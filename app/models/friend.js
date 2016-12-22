import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';
import changeGate from 'ember-computed-change-gate/change-gate';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  loans: hasMany('loan'),
  fullName: Ember.computed('firstName', 'lastName', {
  	get() {
  		return this.get('firstName') + ' ' + this.get('lastName');
  	}
  }),
  capitalizeFirstName: changeGate('firstName', function(firstName) {
    return Ember.String.capizalize(firstName);
  })
});
