import { ADD_A_FEATURE, REMOVE_FEATURE } from '../actions';

const initialState = {
  additionalPrice: 0,
  car: {
    price: 46595,
    name: '2019 Ford Mustang Bullitt',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: [],
  },
  store: [
    { id: 1, name: 'Bullitt Electronics package', price: 2100 },
    { id: 2, name: 'Full Vehicle Cover', price: 395 },
    { id: 3, name: 'MagneRide Damping System', price: 1695 },
    { id: 4, name: 'RECARO Leather-trimmed Front Sport Seats', price: 1595 },
    { id: 5, name: 'Memory Driver Seat and Mirrors', price: 2100 },
    { id: 6, name: 'Stereo System with CD-Player and HD Radio', price: 895 },
    { id: 7, name: 'B&O(Bang & Olufsen) Premium Sound System', price: 2100 },
    { id: 8, name: 'Voice-Activated Touchscreen Navigation System with SiriusXM Traffic & Travel Link', price: 795 },
    { id: 9, name: 'Aeroskin Hood Protector by Lund', price: 79 },
    { id: 10, name: 'Hood Louvers by Air Design', price: 199 },
    { id: 11, name: 'Parking Lamp Curtains by Air Design', price: 169 },
    { id: 12, name: 'Quarter Window Louvers by Air Design', price: 199 },
    { id: 13, name: 'Bullfrog Hop by Kicker', price: 199 },
    { id: 14, name: 'Bullfrog Jump by Kicker', price: 399 },
    { id: 15, name: 'Cargo Area Protector', price: 110 },
    { id: 16, name: 'Windshield Sunscreen by Covercraft', price: 79 },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_A_FEATURE:
      return {
        ...state,
        additionalPrice:
          state.additionalPrice +
          state.store.find(item => item.id === action.payload).price,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            state.store.find(item => item.id === action.payload),
          ],
        },
        store: state.store.filter(item => item.id !== action.payload),
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice:
          state.additionalPrice -
          state.car.features.find(item => item.id === action.payload).price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            item => item.id !== action.payload,
          ),
        },
        store: [
          ...state.store,
          state.car.features.find(item => item.id === action.payload),
        ],
      };
    default:
      return state;
  }
};
