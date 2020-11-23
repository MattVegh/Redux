const redux = require("redux")
// const initialState = {
//     count: 0
// }

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

function increment() {
    return {
        type: "INCREMENT"
    }
}

// Create another action creator to handle decrementing the number

function decrement() {
    return {
        type: "DECREMENT"
    }
}

// function reducer(state = {count: 0}, action) {
//     // return new state based on the incoming action.type
//     if (action.type === "INCREMENT") {
//         return {
//             count: state.count + 1
//         }
//     } // add an else if() to this reducer to handle the decrement action
//         else if(action.type === "DECREMENT") {
//             return {
//                 count: state.count - 1
//             }
//         }
// }

function reducer(state = {count: 0}, action) {
    // return new state based on the incoming action.type
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
    }
}