import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
//import { nanoid } from 'nanoid';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = {
    searchWord: '',
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  //======================================
  handleformSubmit = searchWord => {
    this.setState({ searchWord });
  };
  //===============================

  render() {
    return (
      <>
        <Searchbar onSubmitProp={this.handleformSubmit} />
        <ImageGallery searchWord={this.state.searchWord} />
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}
export default App;
