import { combineReducers } from 'redux';

// import all reducers
import notes 		from './Notes';
import category 	from './Category';

// combine thems 
const appReducer = combineReducers({
	notes : notes, //shorthand from notes:notes	
	category : category 	
})

export default appReducer; 