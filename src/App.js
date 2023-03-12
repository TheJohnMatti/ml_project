import React from 'react';
import ImageGuesser from './ImageGuesser';



function App() {
  return (
    <>
      <ImageGuesser />
      <input type="text" class="form-control"/>
      <button class="btn btn-primary">Add Info</button>
      <button class="btn btn-primary">Clear Info</button>
    </>
    )
}

export default App;
