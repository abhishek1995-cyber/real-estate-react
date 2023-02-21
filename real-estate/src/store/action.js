export function addProperty(data) {
  return {
    type: "ADD",
    payload: data,
  };
}

export function searchProperty(data) {
  return {
    type: "SEARCH_PROPERTY",
    payload: data,
  };
}
