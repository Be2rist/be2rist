import * as React from 'react';
import Button from 'components/base/Button';
import Typography from 'components/base/Typography';
import ProductPosterLayout from 'components/home/ProductPosterLayout';

const backgroundImage = '/static/images/background.jpg';

const ProductPoster = () => {
  return (
    <ProductPosterLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9',
        backgroundPosition: 'center'
      }}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="background" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your guide
      </Typography>
      <Typography color="inherit" align="center" variant="h5" sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}>
        Share interesting points with others
      </Typography>
      <Button color="secondary" variant="contained" size="large" component="a" href="/login" sx={{ minWidth: 200 }}>
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductPosterLayout>
  );
};

export default ProductPoster;
