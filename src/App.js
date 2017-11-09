import React from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './containers/Container';
import Routes from './routes';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Container />
//         <Footer/>
//       </div>
//     );
//   }
// }



// export default App;

export default () => <Routes />