import PropTypes from 'prop-types';
import { Grid, Item, Image } from './ImageGallery.styled';

export default function ImageGallery({ handlerClickImg, images }) {
  return (
    <Grid>
      {images.map(item => (
        <Item key={item.id}>
          <Image
            src={item.webformatURL}
            alt=""
            onClick={() => handlerClickImg(item.largeImageURL)}
          />
        </Item>
      ))}
    </Grid>
  );
}
ImageGallery.propTypes = {
  handlerClickImg: PropTypes.func,
  images: PropTypes.array,
};
