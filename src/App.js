import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
// import Write from './pages/write';
import store from './store';

import College from './pages/volunteer/college';
// 查看推荐志愿（平行志愿）
import VolunteerMajor from './pages/volunteer/major';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      	<BrowserRouter>
      		<div>
            <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                {/*<Route path='/write' exact component={Write}></Route>*/}
                <Route path='/detail/:id' exact component={Detail} />
                <Route path='/college' exact component={College} />
                <Route path='/volunteerMajor' exact component={VolunteerMajor} />
                <Route path='/zhiyuan/college' exact component={College} />
                <Route path='/zhiyuan/pingxing' exact component={College} />
      		</div>
      	</BrowserRouter>
      </Provider>
    );
  }
}

export default App;
