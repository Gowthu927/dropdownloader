import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import AddItemtoDropReducer from './AddItemtoDropReducer';

export default combineReducers({
    form:formReducer,
    ListItems:AddItemtoDropReducer
});