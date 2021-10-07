import { combineReducers } from 'redux';
import basketStore from './basketStore';
import globalStore from './globalStore';
import productStore from './productStore';

const reducers = combineReducers({
   productStore,
   basketStore,
   globalStore,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
