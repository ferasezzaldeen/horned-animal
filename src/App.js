import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import Animals from './components/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './components/Forms';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      AnimalsArr: Animals,
      title: '',
      imgurl: '',
      description: '',
      numberOfHorns:'',

    }
  }
  changeNumOfHorns =(event)=>{
    this.setState({numberOfHorns:event.target.value});
    console.log(this.state.numberOfHorns)
  }

  OpenModel = (first, second, third) => {
    this.setState({
      show: true,
      title: first,
      imgurl: second,
      description: third
    });
    console.log('working');
    console.log(this.state.show);
  };
  CloseModal = () => {
    this.setState({ show: false })
    console.log('close working')
  };


  render() {
    return (<div className='web'>
      <Header />
      <Forms changeNumOfHorns={this.changeNumOfHorns} />
      <Main
        Animals={this.state.AnimalsArr}
        OpenModel={this.OpenModel}
        numberOfHorns={this.state.numberOfHorns}
      />
      <SelectedBeast
        show={this.state.show}
        CloseModal={this.CloseModal}
        showModal={this.OpenModel}
        title={this.state.title}
        imgurl={this.state.imgurl}
        description={this.state.description}  />
      <Footer
      />

    </div>
    )
  }

}
export default App;