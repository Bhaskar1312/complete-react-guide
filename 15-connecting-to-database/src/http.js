export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');

    const respData = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch places');
    }
    return respData.places;
}

export async function fetchUserPlaces() {
    // const response = await fetch('http://localhost:3000/user-placess');
    const response = await fetch('http://localhost:3000/user-places');

    const respData = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch places');
    }
    return respData.places;
}


export async function updateUserPlaces(places) {
    // const response = await fetch('http://localhost:3000/user-placess', {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places: places}), // should be json, not javascript obj
        // backend expects {places: places} inside body
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const respData = await response.json();
    return respData.message; // on backend, it has message property
}