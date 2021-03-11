import React from 'react';
import Signup from './Signup';

import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minWidth: '100%', height: '100vh' }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Signup />

      </div>
    </Container>

  )
}

export default App;
