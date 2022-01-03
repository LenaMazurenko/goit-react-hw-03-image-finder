import React, { Component } from 'react';
import { Grid, Item, Image } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchWord !== this.props.searchWord) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchWord}&page=1&key=24022997-1f6b45243be8e45a3cc65a02f&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(images => this.setState({ images }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { images, loading } = this.state;
    return (
      <>
        {loading && <div>Loading....</div>}
        {images && (
          <Grid>
            {images.hits.map(item => (
              <Item key={item.id}>
                <Image src={item.webformatURL} alt="" />
              </Item>
            ))}
          </Grid>
        )}
      </>
    );
  }
}
export default ImageGallery;
