const KEY =
    '?client_id=41bf03847497acac6386ca4ed7b137106dc0962debcd2e1d51e18d464cfee204';
const URL = `https://api.unsplash.com/photos/`;
const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};
const fetchImagesStats = async id => {
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};
export { fetchImages, fetchImagesStats };
