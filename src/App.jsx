import AssetForm from './AssetForm';
import EVAssets from "./EVAssets";
import { Routes, Route } from "react-router-dom";
import WebFont from 'webfontloader';



function App() {
  WebFont.load({
    custom: {
      families: ['DiodrumSemibold', 'SaturdaySansBold'],
    },
  });

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
