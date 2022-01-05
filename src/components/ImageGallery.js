import React, { Component } from 'react';
//import { toast } from 'react-toastify';
import { LoaderWrapper, Grid, Item, Image } from './ImageGallery.styled';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchWord !== this.props.searchWord ||
      prevProps.page !== this.props.page
    ) {
      this.setState({ status: 'pending' });
      this.props.succesFetch(false);
      if (prevProps.searchWord !== this.props.searchWord) {
        this.setState({ images: [] });
      }

      fetch(
        `https://pixabay.com/api/?q=${this.props.searchWord}&page=${this.props.page}&key=24022997-1f6b45243be8e45a3cc65a02f&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => response.json())
        .then(images => {
          if (images.total) {
            this.setState(prevState => ({
              images: [...prevState.images, ...images.hits],
            }));

            this.setState({ status: 'resolved' });
            this.props.succesFetch(true);
          } else {
            this.setState({ status: 'reject' });
            //toast.error('Bad request, try again!');
          }
        })
        .catch(error => this.setState({ error }));
    }
  }

  render() {
    const { images, status } = this.state;
    if (status === 'idle') {
      return <h1>Enter query....</h1>;
    }
    if (status === 'pending') {
      return (
        <LoaderWrapper>
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
        </LoaderWrapper>
      );
    }

    if (status === 'resolved') {
      return (
        <Grid>
          {images.map(item => (
            <Item key={item.id}>
              <Image src={item.webformatURL} alt="" />
            </Item>
          ))}
        </Grid>
      );
    }

    if (status === 'reject') {
      return (
        <h1>Bad request, try again!</h1>
        // toast.error('Bad request, try again!')
      );
    }
  }
}
export default ImageGallery;
