import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const ProductComponent = () => {
  const [product, setProduct] = useState({
    name: '',
    manufacturerName: '',
    manufacturer: '',
    manDateEpoch: '',
    expDateEpoch: '',
    isInBatch: '',
    batchCount: '',
    barcodeId: '',
    productImage: '',
    productType: '',
    scientificName: '',
    usage: '',
    composition: '',
    sideEffects: '',
  });

  const [allProducts, setAllProducts] = useState([]);
  const [myProducts, setMyProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    // Fetch all products when the component mounts
    getAllProducts();
  }, []);

  const addProduct = async () => {
    try {
      const currentTime = ''; // You may want to set a meaningful value for currentTime
      const response = await axios.post('/product/addProduct', { ...product, currentTime });
      console.log(response.data);
      // Refresh the list of all products after adding a new one
      getAllProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const getAllProducts = async () => {
    try {
      const response = await axios.get('/product/getAllProducts');
      setAllProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMyProducts = async () => {
    const userAddress = ''; // Replace with the actual user's address
    try {
      const response = await axios.get(`/product/getMyProducts?userAddress=${userAddress}`);
      setMyProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getSingleProduct = async (barcodeId) => {
    try {
      const response = await axios.get(`/product/getSingleProduct?barcodeId=${barcodeId}`);
      setSingleProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Product</h2>
      <Container>
      <Form>
      <Form.Group className="mb-3" controlId="name">
      <Form.Label>Product Name</Form.Label>
      <Form.Control type="text" placeholder="Enter product name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="manufacturerName">
      <Form.Label>Manufacturer Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Manufacturer name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="manufacturer">
      <Form.Label>Manufacturer</Form.Label>
      <Form.Control type="text" placeholder="Enter Manufcaturer name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="manDateEpoch">
      <Form.Label>Manufacturing Date</Form.Label>
      <Form.Control type="date" placeholder="Enter manufaturing Date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="expDateEpoch">
      <Form.Label>Expiration Date</Form.Label>
      <Form.Control type="date" placeholder="Enter Expiry date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="isInBatch">
      <Form.Label>Is in Batch</Form.Label>
      <Form.Control type="text" placeholder="Yes/No" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="batchCount">
      <Form.Label>Batch Count</Form.Label>
      <Form.Control type="text" placeholder="Enter Batch Count" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="barcodeId">
      <Form.Label>Barcode Id</Form.Label>
      <Form.Control type="text" placeholder="Enter barodeId " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="sideEffects">
      <Form.Label>Side Effects</Form.Label>
      <Form.Control type="text" placeholder="Enter Sideeffects name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productType">
      <Form.Label>Product Type</Form.Label>
      <Form.Control type="text" placeholder="Enter product type" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productImage">
      <Form.Label>Product Image</Form.Label>
      <Form.Control type="file" placeholder="Choose product Image" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="scientificName">
      <Form.Label>Scientific Name</Form.Label>
      <Form.Control type="text" placeholder="Enter scientific name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="usage">
      <Form.Label>Usage</Form.Label>
      <Form.Control type="text" placeholder="Enter Usage" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="composition">
      <Form.Label>Composition</Form.Label>
      <Form.Control type="text" placeholder="Enter product composition" />
      </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
      </Container>

      <h2 className="mt-4">All Products</h2>
      {/* Display all products */}
      <ul className="list-group">
        {allProducts.map((product) => (
          <li key={product.barcodeId} className="list-group-item">
            {product.name}
          </li>
        ))}
      </ul>

      <h2 className="mt-4">My Products</h2>
      {/* Display user's products */}
      <ul className="list-group">
        {myProducts.map((product) => (
          <li key={product.barcodeId} className="list-group-item">
            {product.name}
          </li>
        ))}
      </ul>

      <h2 className="mt-4">Single Product</h2>
      {/* Display single product */}
      {singleProduct && <div className="mt-2">{singleProduct.name}</div>}
    </div>
  );
};

export default ProductComponent;
