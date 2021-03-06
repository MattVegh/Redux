const redux = require("redux")

const initialState = {
    count: 0,
    favoriteThings: []
}

// function reducer(state=initialState, action) {
//     switch(action.type) {
//         case "INCREMENT":
//             return {
//                 count: state.count + 1
//             }
//         case "DECREMENT":
//             return {
//                 count: state.count - 1
//             }
//         default:
//             return state
//     }
// }

// const store = redux.createStore(reducer)

// store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch({type: "INCREMENT"})
// store.dispatch({type: "INCREMENT"})
// store.dispatch({type: "DECREMENT"})

// function increment(amount) {
//     return {
//         type: "INCREMENT",
//         payload: amount
//     }
// }

// // Create another action creator to handle decrementing the number

// function decrement() {
//     return {
//         type: "DECREMENT"
//     }
// }

function changeCount(amount) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function double() {
     return {
         type: "DOUBLE"
     }
 }

function halve() {
    return {
        type: "HALVE"
    }
}

function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        payloud: thing
    }
}
function reducer(state = initialState, action) {
    // return new state based on the incoming action.type
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.payload
            }

        case "DOUBLE":
            return {
                count: state.count * 2
            }
        case "HALVE":
            return {
                count: Math.round(state.count / 2)
                //count: Math.floor(state.count / 2)
            }

        case "ADD_FAVORITE_THING":
            return {
                ...state,
                favoriteThings: [...state.favoriteThings, action.payload]
            }
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(changeCount(3))