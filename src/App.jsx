import AssetForm from './AssetForm';
import EVAssets from "./EVAssets";
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import WebFont from 'webfontloader';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AssetForm />} />
        <Route path="/:prefix/:nameCoinId" element={<EVAssets />} />
      </Routes>
    </div>
  );
}

export default App;
