
const fetchAPI = window.fetchAPI;

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  return fetchAPI(new Date(action.payload));
};
