import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/featuresActions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const featuresReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                // add price of feature to additional price
                additionalPrice: action.payload.price + state.additionalPrice,
                // update car features
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        action.payload,
                    ],
                },
                // remove added feature from list
                additionalFeatures: state.additionalFeatures.filter(item => item.id !== action.payload.id)
            }
        case REMOVE_FEATURE:
            console.log(action)
            return {
                ...state,
                // subtract price of feature from additional price
                additionalPrice: state.additionalPrice - action.payload.price,
                // update car features
                car: {
                    ...state.car,
                    features: state.car.features.filter(item => item.id !== action.payload.id)
                },
                // put removed feature back on feature list
                additionalFeatures: [...state.additionalFeatures, action.payload]
            }
        default:
            return state
    }
}