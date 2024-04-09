import Places from './Places.jsx';
import {useEffect, useState} from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState()

  // cant use await as AvailablePlaces is not async,
  // fetch('http://localhost:3000/places')
  //     .then((res)=> res.json()) // again promise
  //     .then((respData)=> respData.places)
  //     .then((resPlace)=>setAvailablePlaces(resPlace)); // here it updates state, renders component, update state, ... inf loop


  useEffect(()=>{
    // cant use await as AvailablePlaces is not async,
    // fetch('http://localhost:3000/places')
    //     .then((res)=> res.json()) // again promise
    //     .then((respData)=> setAvailablePlaces(respData.places))

    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch('http://localhost:3000/placess');

        const respData = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch places');
        }
        setAvailablePlaces(respData.places);
      } catch (error) {
        setError({
          message:
              error.message || 'Could not fetch places, please try again later.',
        });
      }
      setIsFetching(false);
    }
    fetchPlaces();
    // use slow throttling

  }, []); // only once render

  if (error) {
    return <p title="An error occurred!">{error.message}</p>;
  }
  // if (error) {
  //   return <Error title="An error occurred!" message={error.message} />;
  // }


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isFetching}
      loadingText={"Loading..."}
    />
  );
}
