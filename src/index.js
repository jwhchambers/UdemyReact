// Create a new component. This component should produce some HTML.
import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDYipfvZS7o2U1x77b-uOk8WvH-E68TNF0';

const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
