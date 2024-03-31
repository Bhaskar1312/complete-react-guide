import {useEffect, useRef, useState} from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import {sortPlacesByDistance} from "./loc.js";

const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map(
    (id) =>AVAILABLE_PLACES.find((place) => place.id===id)
);
console.log(storedPlaces); //

function App() {
  // const modal = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedPlace = useRef();

  const [availablePlaces, setAvailablePlaces] = useState(AVAILABLE_PLACES);

  // useEffect(()=> { // infinite loop if useEffect is used
  // const storedIds = JSON.parse(localStorage.getItem('selectedItems')) || [];
  // const storedPlaces = storedIds.map(
  //     (id) =>AVAILABLE_PLACES.find((place) => place.id===id)
  // );
  //   setPickedPlaces(storedPlaces);
  // });

  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);


  useEffect(()=>{
    // navigator is provided by the browser
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES,
          position.coords.latitude,
          position.coords.longitude
      );
      setAvailablePlaces(sortedPlaces); // when component renders it fetches userLocation and updates state,
      // when state is updated, component is rendered again - infinite loop

    });
  }, []);


  function handleStartRemovePlace(id) {
    // modal.current.open();
    setIsModalOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    // modal.current.close();
    setIsModalOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    // the below code can also be part of useEffect, but useEffect(or hooks cant be called from inside normal functions)
    // localStorage is another browser function which stores in string format
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    console.log(storedIds);
    if(storedIds.indexOf(id) === -1) {
      console.log(id);
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
    }

  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    // modal.current.close();
    setIsModalOpen(false);

    const storeIds = JSON.parse(localStorage.getItem('selectedItems')) || [];
    localStorage.setItem('selectedItems', JSON.stringify(storeIds.filter((id)=>id!==selectedPlace.current)))
  }

  return (
    <>
      <Modal open={isModalOpen}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
