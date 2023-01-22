import React from 'react';
import styled from 'styled-components';
import './App.css';
import NavBar from './NavBar/NavBar';
import Swaps from './Swaps/Swaps';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Swaps />
      </Container>
    </div>
  );
}

export default App;
