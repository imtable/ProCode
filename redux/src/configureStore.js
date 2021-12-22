/**
 * Create the store with dynamic reducers
 */

 import { createStore, applyMiddleware, compose } from 'redux';
 import createReducer from './reducers';
 
 export default function configureStore(initialState = {}) {
   let composeEnhancers = compose;

   if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
     /* eslint-disable no-underscore-dangle */
     if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
       composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }
 
   const middlewares = [];
 
   const enhancers = [applyMiddleware(...middlewares)];
 
   const store = createStore(
     createReducer(),
     initialState,
     composeEnhancers(...enhancers),
   );
 
   // Extensions
   store.injectedReducers = {}; // Reducer registry
 
   // Make reducers hot reloadable, see http://mxs.is/googmo
   /* istanbul ignore next */
   if (module.hot) {
     module.hot.accept('./reducers', () => {
       store.replaceReducer(createReducer(store.injectedReducers));
     });
   }
 
   return store;
 }
 