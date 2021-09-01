export const addPizzaToCart = (pizzaObj) => ({
    type : 'ADD_PIZZA_CART',
    payload : pizzaObj,
});
export const removePizzaById = (id) => ({
    type : 'REMOVE_PIZZAS_BLOCK',
    payload: id,
});
export const clearCart = () => ({
    type : 'CLEAR_CART',
});
export const subtractPizzaInBlock = (id) => ({
    type : 'SUBTRACT_PIZZA_IN_BLOCK',
    payload: id,
});
export const addPizzaInBlock = (id) => ({
    type : 'ADD_PIZZA_IN_BLOCK',
    payload: id,
});