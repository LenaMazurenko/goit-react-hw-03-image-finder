import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import fetchQuery from './utils/fetchQuery';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

import { LoaderWrapper } from './components/ImageGallery.styled';

class App extends Component {
  state = {
    images: [],
    searchWord: '',
    status: 'idle',
    page: 1,
    showModal: false,
    activImg: '',
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const { searchWord, page } = this.state;

    if (prevState.searchWord !== searchWord || prevState.page !== page) {
      this.setState({ status: 'pending' });

      if (prevState.searchWord !== searchWord) {
        this.setState({ images: [] });
      }

      fetchQuery(searchWord, page)
        .then(images => {
          if (images.total) {
            this.setState(prevState => ({
              images: [...prevState.images, ...images.hits],
            }));
            this.setState({ status: 'resolved' });
          } else {
            this.setState({ status: 'reject' });
            toast.error('Bad request, try again!');
          }
        })
        .catch(error => this.setState({ error }));
    }
  }

  //======================================

  handleformSubmit = searchWord => {
    this.setState({ searchWord, page: 1 });
  };

  handleFetch = status => {
    this.setState({ status });
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
    const { status, showModal, activImg, images } = this.state;
    return (
      <>
        <Searchbar onSubmitProp={this.handleformSubmit} />
        <ImageGallery handlerClickImg={this.handleImageClick} images={images} />
        {status === 'pending' && (
          <LoaderWrapper>
            <Loader type="Oval" color="#00BFFF" height={80} width={80} />
          </LoaderWrapper>
        )}
        {status === 'resolved' && <Button onClickProp={this.handleLoadMore} />}
        {showModal && <Modal url={activImg} onClick={this.closeModal} />}
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}
export default App;
