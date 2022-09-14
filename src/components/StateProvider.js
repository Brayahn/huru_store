import React, {createContext, useContext, useContext, useReducer}  from "react";

//prepares the data layer 
export const StateContext = createContext();

//wraps the application and provides the data layer 
export const StateProvider = ({  reducer, initialState, children }) => (
    <StateContext.Provider value ={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pulling information from the data layer
export const userStateValue = () => useContext(StateContext);
