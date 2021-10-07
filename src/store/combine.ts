import { combineReducers } from 'redux';
import basketStore from './basketStore';
import productStore from './productStore';

const reducers = combineReducers({
   productStore,
   basketStore,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
