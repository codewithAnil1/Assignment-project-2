// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, CircularProgress, AppBar, Toolbar, Box } from '@mui/material';
import ProductList from './Components/ItemList/ItemList';
import SearchBar from './Components/SearchBar/SearchBar';

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch products.');
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery)
  );

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-commerce Store
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography variant="h6" color="error" align="center">
            {error}
          </Typography>
        ) : filteredProducts.length === 0 ? (
          <Typography variant="h6" align="center">
            Product not available.
          </Typography>
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </Container>
    </Box>
  );
};

export default App;
