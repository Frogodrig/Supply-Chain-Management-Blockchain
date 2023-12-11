import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const PartyAndProductComponent = () => {
  const [addPartyData, setAddPartyData] = useState({
    role: '',
    id_: '',
    name: '',
    email: '',
  });

  const [sellProductData, setSellProductData] = useState({
    partyId: '',
    barcodeId: '',
    currentTime: '',
  });

  const [response, setResponse] = useState(null);

  const handleAddParty = async () => {
    try {
      const result = await axios.post('/auth/addParty', addPartyData);
      setResponse(result.data);
    } catch (error) {
      setResponse({ error: error.message });
    }
  };

  const handleSellProduct = async () => {
    try {
      const result = await axios.post('/auth/sellProduct', sellProductData);
      setResponse(result.data);
    } catch (error) {
      setResponse({ error: error.message });
    }
  };

  return (
    <Container className="mt-5">
      <h2>Add Party</h2>
      <Form>
        <Form.Group controlId="role">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            value={addPartyData.role}
            onChange={(e) => setAddPartyData({ ...addPartyData, role: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="id">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            value={addPartyData.id_}
            onChange={(e) => setAddPartyData({ ...addPartyData, id_: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={addPartyData.name}
            onChange={(e) => setAddPartyData({ ...addPartyData, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={addPartyData.email}
            onChange={(e) => setAddPartyData({ ...addPartyData, email: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleAddParty}>
          Add Party
        </Button>
      </Form>

      <h2 className="mt-4">Sell Product</h2>
      <Form>
        <Form.Group controlId="partyId">
          <Form.Label>Party ID</Form.Label>
          <Form.Control
            type="text"
            value={sellProductData.partyId}
            onChange={(e) => setSellProductData({ ...sellProductData, partyId: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="barcodeId">
          <Form.Label>Barcode ID</Form.Label>
          <Form.Control
            type="text"
            value={sellProductData.barcodeId}
            onChange={(e) => setSellProductData({ ...sellProductData, barcodeId: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="currentTime">
          <Form.Label>Current Time</Form.Label>
          <Form.Control
            type="text"
            value={sellProductData.currentTime}
            onChange={(e) => setSellProductData({ ...sellProductData, currentTime: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSellProduct}>
          Sell Product
        </Button>
      </Form>

      <h2 className="mt-4">Response</h2>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </Container>
  );
};

export default PartyAndProductComponent;
