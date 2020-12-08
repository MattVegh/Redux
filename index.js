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

/**
 * Challenge:
 * 
 * Enable the ability to double and halve the count. 
 * If halving, round down instead of letting your count
 * become a decimal.
 */

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
        case "DOUBLE":
            return {
                count: state.count * 2
            }
        case "HALVE":
            return {
                count: Math.round(state.count / 2)
                //count: Math.floor(state.count / 2)
            }
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})