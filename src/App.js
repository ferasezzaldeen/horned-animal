import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import Animals from './components/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      AnimalsArr: Animals,
      title: '',
      imgurl: '',
      description: '',

    }
  }
  changeTitle = (event) => {
    this.setState({ titile: event.target.value })

  }
  changeImgurl = (event) => {
    this.setState({ title: event.target.value })
  }
  changeDescription = (event) => {
    this.setState({ description: event.target.value })
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
      <Main
        Animals={this.state.AnimalsArr}
        OpenModel={this.OpenModel}
        changeTitle={this.changeTitle}
        changeImgurl={this.changeImgurl}
        changeDescription={this.changeDescription} />
      <SelectedBeast
        show={this.state.show}
        CloseModal={this.CloseModal}
        showModal={this.OpenModel}
        title={this.state.title}
        imgurl={this.state.imgurl}
        description={this.state.description}  />
      <Footer />

    </div>
    )
  }

}
export default App;