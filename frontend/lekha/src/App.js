import { useState } from "react";
import DeckGL from "@deck.gl/react";
import StaticMap from "react-map-gl";
import maplibregl from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";
const App = () => {
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 1,
  });

  return (
    <div>
      <DeckGL
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        viewState={viewState}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        controller={true}
        layers={[]}
      >
        <StaticMap
          mapLib={maplibregl}
          mapStyle="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json"
          transformRequest={(url, resourceType) => {
            if (url.includes("?")) {
              url = url + "&api_key={54e515e8-7f5c-4c7f-b816-798a90f2d338}";
            } else {
              url = url + "?api_key={54e515e8-7f5c-4c7f-b816-798a90f2d338}";
            }
            return { url, resourceType };
          }}
        />
      </DeckGL>
      Lekha An best CRM software for you all need
    </div>
  );
};

export default App;