import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './Reducers';
import {Route , Switch , BrowserRouter} from 'react-router-dom';

import DisplayItemsinDrop from './Components/DisplayItemsinDrop';
import AddItemtoDrop from './Components/AddItemtoDrop';

ReactDOM.render(
    <Provider store={createStore(reducers)} >
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={AddItemtoDrop} />
                <Route path='/items' exact component={DisplayItemsinDrop} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)