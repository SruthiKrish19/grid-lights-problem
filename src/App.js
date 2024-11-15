import React, { useState } from 'react';
import GridInput from './grid-input';
import BoxSelection from './box-selection/BoxSelection';

function App() {
  const [boxData, setBoxData] = useState(null);

  return (
    <div className="main-app">
      <h2>Grid Lights Problem</h2>
      {!boxData && <GridInput setBoxData={setBoxData} />}
      {boxData && <BoxSelection data={boxData} />}
    </div>
  );
}

export default App;
