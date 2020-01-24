import paintingsData from "../paintings.json"
import {combineReducers} from 'redux'

const initialState = {
  paintings: paintingsData.paintings,
  searchText : ""
}

function searchTextReducer(oldState = "", action ){
  switch (action.type) {
    case "SEARCH":
      return action.payload
    default:
      return oldState
  }
}

function paintingsReducer(oldState = paintingsData.paintings, action){
  switch (action.type) {
    case "VOTE":
      return oldState.map(painting => {
        if(painting.id === action.payload){
          return {
            ...painting,
            votes: painting.votes + 1
          }
        }else{
          return painting
        }
      })
    case "SAVE_PAINTING":
      return oldState.map(painting => {
        if(painting.id === action.payload.paintingId){
          return {
            ...painting,
            title: action.payload.title,
            artist: {
              ...painting.artist,
              name: action.payload.name,
              birthday: action.payload.birthday,
              deathday: action.payload.deathday
            }
          }
        }
        return painting
      })
      default:
        return oldState
  }
}

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  searchText: searchTextReducer
})
//piece of state: its reducer function


// function reducer(oldState=initialState, action){
//   switch (action.type) {
//     case "SEARCH":
//       return {
//         ...oldState,
//         searchText: action.payload
//       }
//     case "VOTE":
//       return {
      //   ...oldState,
      //   paintings: oldState.paintings.map(painting => {
      //     if(painting.id === action.payload){
      //       return {
      //         ...painting,
      //         votes: painting.votes + 1
      //       }
      //     }else{
      //       return painting
      //     }
      //   })
      // }
//     default:
//       return oldState
//   }
// }

export default rootReducer
