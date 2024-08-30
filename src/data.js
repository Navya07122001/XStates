import axios from "axios";

export const fetchCountries = async () => {
    try {
        const response = await axios.get("https://crio-location-selector.onrender.com/countries");
        console.log(response.data); 
        return response.data;
    } catch (e) {
        console.log(e);
    }
};
export const fetchStates = async (country) => {
    try {
        const response = await axios.get(`https://crio-location-selector.onrender.com/country=${country}/states`);
        console.log(response.data); 
        return response.data;
    } catch (e) {
        console.log(e);
    }
};
export const fetchCities= async (countryName,stateName) => {
    try {
        const response = await axios.get(`https://crio-location-selector.onrender.com/country=${countryName}/state=${stateName}/cities`);
        console.log(response.data); 
        return response.data;
    } catch (e) {
        console.log(e);
    }
};