import React from "react";

import './scss/app.scss';

import {Header} from './components';
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";

import {Route} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas} from "./redux/actions/pizzas";

function App() {

    const dispatch = useDispatch();

    const {sortBy,category} = useSelector(({filters}) => {
        return {
            sortBy: filters.sortBy,
            category: filters.category,
        }
    });

    React.useEffect(() => {
        console.log('render home', sortBy,category);
        dispatch(fetchPizzas(sortBy,category));

    }, [dispatch,sortBy, category]);

    const homeProps = {sortBy,category};

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
            <Route path="/" render={() => <Home {...homeProps}/>} exact/>
            <Route path="/cart" component={Cart} exact/>
        </div>
      </div>
    </div>
  );
}

export default App;
