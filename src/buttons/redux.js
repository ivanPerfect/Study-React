
// Store
{
    list: [
        {title: 'first text'},
        {title: 'second text'}
    ],
    title: 'analog text'
}

// Actions

// const ADD_ITEM = 'ADD_ITEM'
// const action = {action: ADD_ITEM, title: 'buy_moto'}

{type: 'ADD_ITEM', title: 'item'}
{type: 'REMOVE_ITEM', index: 1}
{type: 'CHANGE_LIST_TITLE', title: 'changed'}


// Reducers
const title = (state = '', action) =>{
    if(action.type === 'CHANGE_LIST_TITLE'){
        return action.title;
    }else{
        return state;
    }

}

const listManager = (state = {}, action) =>{
    return{
        title: title(state.title, action),
        list: list(state.list, action)
    }
}

function addItem(t){
    return {
        type: ADD_ITEM,
        title: t
    }
}

dispatchEvent(addItem('buy_milk'));

const dispatchAddItem = i => dispatchEvent(addItem(i))
dispatchAddItem('Milk');

(currentState, action) => newState