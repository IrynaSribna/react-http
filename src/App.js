import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      //React.Fragment was intoduced to not use Aux
      <BrowserRouter>
        <div className="App">
            <Blog />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;

//the following packages were installer: npm --save react-routing react-routing-dom


//Laziness start from React 16.6
//after imports but before class declaration
// const Posts = React.lazy(()=> import('./Posts'))
//inside the class
// <Route path="/posts" render={() => (<Suspense fallback={<div>Loading...</div>})}> <Posts/> </Suspense>/>
//laziness and suspense can be applied not only to Routes but to other components too, for example to buttons

