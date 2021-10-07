import { combineReducers } from 'redux';
import productStore from './productStore';

const reducers = combineReducers({
   productStore,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
