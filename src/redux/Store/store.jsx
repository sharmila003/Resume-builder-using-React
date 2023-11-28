import { createStore } from 'redux';
import rootReducer from '../Reducer/combinereducer';

const Store = createStore(rootReducer)

export { Store };