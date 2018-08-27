import React, {Component} from 'react';
import LogPage from './LogPage'
import FocusPage from './FocusPage'
import GoodLogPage from './GoodLogPage'
import {Route} from 'react-router-dom';

class AppRouter extends Component {
    render() {
        return (      
            <div>
              <Route  exact path="/" component={LogPage}/>
              <Route  path="/focus" component={FocusPage}/>
              <Route  path="/goodLog" component={GoodLogPage}/>
            </div>
    );
    }
}

export default AppRouter;
