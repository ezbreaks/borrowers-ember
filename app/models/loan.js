import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  returned: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  friend: DS.belongsTo('friend'),
  article: DS.belongsTo('article'),
  notes: DS.attr('string', { defaultValue: ''})
});
