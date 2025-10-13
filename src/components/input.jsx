import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import './components.module.css'

const UrlInput = ({ url, setUrl, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit} className="url-input-form">
      <InputGroup className="url-input-group">
        <Form.Control
          type="text"
          placeholder="https://youtube.com/watch?v=..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="url-input"
        />
      </InputGroup>
    </Form>
  );
};

export default UrlInput;