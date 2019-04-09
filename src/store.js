import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function store(initialState={ }) {
 return createStore(
   reducers,
   initialState,
   applyMiddleware(thunk)
 );
}