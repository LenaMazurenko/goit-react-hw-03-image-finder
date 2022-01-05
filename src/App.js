import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

class App extends Component {
  state = {
    searchWord: '',
    successfulyLoad: false,
    page: 1,
    showModal: false,
    activImg: '',
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
  togleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleImageClick = url => {
    this.setState({ activImg: url, showModal: true });
    window.addEventListener('keydown', this.closeModal);
  };
  closeModal = e => {
    if (e.currentTarget === e.target)
      this.setState({ activImg: '', showModal: false });
    if (e.code === 'Escape') this.setState({ activImg: '', showModal: false });
    window.removeEventListener('keydown', this.closeModal);
  };
  //===============================

  render() {
    const { searchWord, successfulyLoad, page, showModal, activImg } =
      this.state;
    return (
      <>
        <Searchbar onSubmitProp={this.handleformSubmit} />
        <ImageGallery
          searchWord={searchWord}
          succesFetch={this.handleFetch}
          page={page}
          handlerClickImg={this.handleImageClick}
        />
        {successfulyLoad && <Button onClickProp={this.handleLoadMore} />}
        {showModal && <Modal url={activImg} onClick={this.closeModal} />}
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}
export default App;
