import React from 'react';

import {Categories,SortPopup,PizzaBlock,LoadingBlock} from "../components";

import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {addPizzaToCart} from "../redux/actions/cart";

export const Home = ({sortBy,category}) => {

    const dispatch = useDispatch();
    const {items,isLoaded} = useSelector(({pizzas}) => {
        return {
            items: pizzas.items,
            isLoaded: pizzas.isLoaded,
        }
    });
    const cartItems = useSelector( ({cart}) => cart.items);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, [dispatch]);

    const onSelectSortBy = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, [dispatch]);

    const onAddToCart = React.useCallback ((item) => {
        console.log(item,'item');
        dispatch(addPizzaToCart(item));
    }, [dispatch]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickCategory={onSelectCategory} activeCategory={category} onClick={null}/>
                <SortPopup onClickSort={onSelectSortBy} activeSortBy={sortBy} onClick={null}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className={isLoaded ? "content__items" : "content__items content__items-loading"}>
                {isLoaded ?
                    items && items.map((item, index) => (
                        <PizzaBlock addedCount={cartItems[item.id] && cartItems[item.id].length}
                             onClick={onAddToCart} index={index} key={item.id} {...item}/>
                    )) :
                    [...Array(10)].map((item, index) => (
                        <LoadingBlock key={index}/>
                    ))
                }
            </div>
        </div>
    );
};