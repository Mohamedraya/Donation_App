import {createSlice} from '@reduxjs/toolkit';

// Defining the initial state for the user slice of the store
const initialState = {

  isLoggedIn: false,
  profileImage: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
};

// Creating a new slice of the store named "user" with its own set of reducers
  const User = createSlice({
    name: "user",
    initialState: initialState,

    reducers: {

      login: (state, action) => {
      return {
        ...state, 
        ...{isLoggedIn: true}, 
        ...action.payload};
      },

      resetToInitialState: () => {
        return initialState;
      },

      updateToken: (state, action) => {
        state.token = action.payload;
      },
    }

    
  },
);

// Exporting the reducers here from the "User" slice
// makes them available to other parts of the app that want to use it

export const {resetToInitialState, login,updateToken} = User.actions;
export default User.reducer;


//'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top'