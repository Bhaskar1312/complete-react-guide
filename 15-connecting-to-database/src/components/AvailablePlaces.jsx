import Places from './Places.jsx';
import {useEffect, useState} from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // cant use await as AvailablePlaces is not async,
  // fetch('http://localhost:3000/places')
  //     .then((res)=> res.json()) // again promise
  //     .then((respData)=> respData.places)
  //     .then((resPlace)=>setAvailablePlaces(resPlace)); // here it updates state, renders component, update state, ... inf loop


  useEffect(()=>{
    // cant use await as AvailablePlaces is not async,
    fetch('http://localhost:3000/places')
        .then((res)=> res.json()) // again promise
        .then((respData)=> setAvailablePlaces(respData.places))
  }, []); // only once render

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
