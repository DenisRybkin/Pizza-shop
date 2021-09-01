import produce from 'immer';
import {reduce, map} from 'lodash';

const initialState = {
    items : {},
    totalPrice : 0,
    totalCount: 0,
};
const cart = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'ADD_PIZZA_CART' :
                if(!draft.items[action.payload.id]){
                    draft.items[action.payload.id] = [];
                }
                draft.items[action.payload.id].push(action.payload);
                break;
            case 'REMOVE_PIZZAS_BLOCK' :
                delete draft.items[action.payload];
                break;
            case 'CLEAR_CART' :
                draft.items = {};
                break;
            case 'SUBTRACT_PIZZA_IN_BLOCK' : {
                const id = action.payload;
                const lastItem = draft.items[id][draft.items[id].length - 1];
                if(state.items[id].length === 1){
                    if(window.confirm(`Вы действительно хотите убрать из корзины последнею ${lastItem.name}?`)){
                        delete draft.items[id];
                    } else
                        break;
                } else {
                    draft.items[id].pop();
                }
                break;
            }
            case 'ADD_PIZZA_IN_BLOCK' : {
                const id = action.payload;
                const lastItem = draft.items[id][draft.items[id].length - 1];
                draft.items[id].push(lastItem);
                break;
            }
            default :
                return state;
        }
        console.log('cart reducer')
        const result = reduce(map(draft.items), (prev,cur) => prev.concat(cur), []);
        draft.totalPrice = result.reduce((sum,current) => sum + current.price ,0);
        draft.totalCount = result.length;
    })
};
export default cart;