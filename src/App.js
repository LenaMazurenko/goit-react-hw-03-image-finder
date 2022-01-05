import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { nanoid } from 'nanoid';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

class App extends Component {
  state = {
    searchWord: '',
    successfulyLoad: false,
    page: 1,
  };

  //componentDidMount() {}
  //componentDidUpdate(prevProps, prevState) {}

  //======================================

  handleformSubmit = searchWord => {
    this.setState({ searchWord, page: 1 });
  };

  handleFetch = successfulyLoad => {
    this.setState({ successfulyLoad });
  };
  handleLoadMore = evt => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  //===============================

  render() {
    const { searchWord, successfulyLoad, page } = this.state;
    return (
      <>
        <Searchbar onSubmitProp={this.handleformSubmit} />
        <ImageGallery
          searchWord={searchWord}
          succesFetch={this.handleFetch}
          page={page}
        />
        {successfulyLoad && (
          <Button label="Load More" onClickProp={this.handleLoadMore} />
        )}
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}
export default App;
