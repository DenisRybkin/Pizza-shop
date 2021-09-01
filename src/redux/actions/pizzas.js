import axios from "axios";

export const setLoading = (value) => ({
    type : 'SET_LOADED',
    payload : value,
})
export const fetchPizzas = (sortBy, category) => (dispatch) => {
    try{
        dispatch(setLoading(false));
        axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=${sortBy === 'popular' ? 'desc' : 'asc'}`)
            .then(({data}) => dispatch(setPizzas(data)));
    } catch (error){
        alert(`Произошла ошибка при запросе на сервер, ошибка : ${error}`)
    }

}

export const setPizzas = (items) => ({
    type : 'SET_PIZZAS',
    payload : items,
});