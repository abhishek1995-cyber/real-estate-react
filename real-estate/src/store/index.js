import { createStore } from "redux";

const initialVal = {
  properties: [],
  dataToDisplay: [],
};

function propertyReducer(state = initialVal, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        properties: [...state.properties, action.payload],
        dataToDisplay: [...state.dataToDisplay, action.payload],
      };
    case "SEARCH_PROPERTY":
      const filteredData = state.properties.filter((i) =>
        i?.address?.includes(action.payload) ||  i?.type?.includes(action.payload)
      );
      return {
        ...state,
        dataToDisplay: filteredData,
      };

    default:
      return state;
  }
}

let store = createStore(propertyReducer);

export default store;
