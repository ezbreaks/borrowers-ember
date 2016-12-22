import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
    sortBy: {
      refreshModel: true
    },
    sortAscending: {
      refreshModel: true
    }
  },
	// model(params) {
	// 	// We now use store.query and pass include in the options

	// 	let query = { include: 'loans,loans.article' };

	// 	if (params.sortBy) {
	// 		// if sortBy is passed we check if sortAscending is false,
	// 		// and use the JSON API Syntax for descending sort
	// 		// http://jsonapi.org/format/#featching-sorting

	// 		if(!params.sortAscending) {
	// 			query.sort = `-${query.sort}`;
	// 		}
	// 	}
	// 	return this.store.query('friend', query);
	// }

	 model(params) {
    //
    // We use now store.query and pass include in the options
    //

    let query = { include: 'loans,loans.article' };


    // We check if this value is passed
    if (params.sortBy) {
      query.sort = params.sortBy;

      // If sortBy is passed we check if sortAscending is false,
      // and use the JSONAPI syntax for descending sort
      // http://jsonapi.org/format/#fetching-sorting
      //
      if (!params.sortAscending) {
        query.sort = `-${query.sort}`;
      }
    }
    return this.store.query('friend', query);
  }
});




