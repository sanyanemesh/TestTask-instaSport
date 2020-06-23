import { createStore, combineReducers } from 'redux';
import clubReducer from './clubs';


export const getClubs = (state: RootState) => state.clubs


const rootReducer = combineReducers({
  clubs: clubReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
