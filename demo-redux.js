const redux = require('redux');

const counterReducer = (state = {counter : 0},action) => {

    if(action.type === 'INCR'){
        return{
            counter : state.counter + 1
        }
    }

    if(action.type === 'DECR'){
        return{
            counter : state.counter - 1
        } 
    }

    return state;
}

const store = redux.createStore(counterReducer);

const counterSubcriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubcriber);
store.dispatch({type:'INCR'});
store.dispatch({type:'DECR'})