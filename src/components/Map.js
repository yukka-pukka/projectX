import React, { useState } from "react";
import "./map.css";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import mapStyles from "../mapStyles";
import firebase from "firebase";
import UserContext from "../UserContext";

const mapContainerStyle = {
  width: "90vw",
  height: "90vh",
};

const center = {
  lat: 47.620084,
  lng: -122.320126,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

// const onLoad = (marker) => {
//   console.log("marker: ", marker);
// };

const position = {
  lat: 47.605,
  lng: -122.3344,
};

function Map(props) {
  const { user } = React.useContext(UserContext);
  const [restaurants, setRestaurants] = useState([]);
  console.log(restaurants && restaurants.filter((r) => !r.Location.lng));

  const Search = (search) => {
    const r = firebase.database().ref("Restaurants");
    r.on("value", (snapshot) => {
      let filteredResults = Array.from(snapshot.val()).filter((result, i, a) =>
        result.Name.toLowerCase().includes(search)
      );
      setRestaurants(filteredResults);
    });
  };

  const saveResults = () => {
    const r = firebase.database().ref("Searches");
    r.set({
      restaurants: restaurants,
      userID: user.uid,
      query: query,
    });

    r.get().then((snapshot) => {
      console.log("saved searches", snapshot.val());
    });
    console.log(restaurants);
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [selected, setSelected] = React.useState(null);
  const [query, setQuery] = React.useState(
    new URLSearchParams(props.location.search).get("q") || ""
  );

  React.useEffect(() => {
    Search(query);
  }, []);

  if (loadError) return "Error loading maps";

  return (
    <div>
      <form
        className="searchform "
        onSubmit={(e) => {
          e.preventDefault();
          Search(query);
        }}
      >
        <input
          type="button"
          onClick={saveResults}
          value="Save Search"
          disabled={!user}
        />
        <input
          onInput={(e) => {
            console.log(e.target.value);
            setQuery(e.target.value);
          }}
          type="search"
          value={query}
        ></input>
      </form>

      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={center}
          options={options}
          id="marker-example"
        >
          {restaurants.map((restaurant) => (
            <Marker
              key={restaurant.Name}
              // onLoad={onLoad}
              position={{
                lat: restaurant.Location.lat,
                lng: restaurant.Location.lng,
              }}
              onClick={() => {
                setSelected(restaurant);
              }}
            />
          ))}

          {selected ? (
            <InfoWindow
              position={{
                lat: selected.Location.lat,
                lng: selected.Location.lng,
              }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2> {selected.Name} </h2>
                <p>{selected.Address}</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      )}
    </div>
  );
}

export default Map;
