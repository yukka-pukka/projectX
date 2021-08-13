import React, { useState } from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import mapStyles from "../mapStyles";
import { formatRelative } from "date-fns";
import Restaurants from "./restaurants/restaurants";
import { data } from "browserslist";
import { firebaseLooper } from "../utils/helper";
import axios from 'axios';
import firebase from "firebase";
import { search } from "language-tags";
// import RestaurantList from "./listall";


const restaurantData = [
  { id: 1, lat: 47.620084, lng: -122.320126, time: new Date() },
  { id: 2, lat: 47.614579, lng: -122.333224, time: new Date() },
  { id: 3, lat: 47.618578, lng: -122.321079, time: new Date() },
];

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

const onLoad = (marker) => {
  console.log("marker: ", marker);
};
const position = {
  lat: 47.605,
  lng: -122.3344,
};


const Map= () => {
const [restaurants, setRestaurants] = useState([]);

  const Search = (e) => { 
    e.preventDefault()
    const r = firebase.database().ref('Restaurants');
    const search = e.target[0].value;
      r.on('value', (snapshot) => {
        let filteredResults = Array.from(snapshot.val()).filter((result) => result.Name.toLowerCase().includes(search));
        setRestaurants(filteredResults);
      });
      };
  

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [selected, setSelected] = React.useState(null);

  if (loadError) return "Error loading maps";

  return (
    <div>
      <form onSubmit={ (e)=> Search(e)}>
        <input type="search"></input>
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
              onLoad={onLoad}
              position={{ lat: restaurant.Location.lat, lng: restaurant.Location.lng }}

              onClick={() => {
                setSelected(restaurant);
              }}
            />
          ))}

          {selected ? (
            <InfoWindow
              position={{ lat: selected.Location.lat, lng: selected.Location.lng }}
              onCloseClick={() => {
                setSelected(null);
              }} 
            >
              <div>
                <h2> {selected.Name} </h2>
                <p>
                  {selected.Address}
                  
                </p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
