export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');

    const respData = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch places');
    }
    return respData.places;
}