export const ADD_A_FEATURE = 'ADD_A_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = id => {
  return { type: ADD_A_FEATURE, payload: id };
};

export const removeFeature = id => {
  return { type: REMOVE_FEATURE, payload: id };
};