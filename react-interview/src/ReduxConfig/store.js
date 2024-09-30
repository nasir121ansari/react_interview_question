import { legacy_createStore as createStore} from 'redux'
import couterReducer from './reducer';

const store = createStore (couterReducer)

export default store;