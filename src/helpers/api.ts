const API_URL = 'https://instasport.co/dashboard/api/v1/clubs/?format=json'

export const getDataFromServer = () => {
  return fetch(API_URL)
    .then(response => response.json());
};
