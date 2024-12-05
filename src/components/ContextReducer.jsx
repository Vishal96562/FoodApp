import React, { createContext, useContext, useReducer } from 'react'

const cardStateContext = createContext();
const cardDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }]

        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;

        // case "UPDATE":
        //     let arr = [...state]
        //     arr.find((food, index) => {
        //         if (food.id === action.id) {
        //             arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
        //         }
        //         return arr;
        //     })
        case "UPDATE":
            // Create a new array based on current state
            let arr = state.map((food) => {
                if (food.id === action.id) {
                    // Update the matching food item
                    return {
                        ...food,
                        qty: food.qty + parseInt(action.qty),
                        price: food.price + action.price
                    };
                }
                // Return unmodified items
                return food;
            });
            return arr;
        case "DROP": {
            let empArray = []
            return empArray
        }

        default:
            console.log(" Error in reducer");
    }



}

export const CardProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])
    return (
        <cardDispatchContext.Provider value={dispatch}>
            <cardStateContext.Provider value={state}>
                {children}
            </cardStateContext.Provider>
        </cardDispatchContext.Provider>
    )
}

export const useCart = () => useContext(cardStateContext);
export const useDispatchCard = () => useContext(cardDispatchContext);