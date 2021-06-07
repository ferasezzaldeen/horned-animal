import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import HornedBeast from './components/HornedBeast'
class App extends React.Component{

  render(){
    return( <div className='web'>
      <Header/>
      <Main />
      <Footer/>    
    </div>
    )
  }

}
export default App;