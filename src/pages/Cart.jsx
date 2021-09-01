import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {CartHeader,CartEmpty,CartItem1, Button} from "../components";
import {removePizzaById, clearCart, addPizzaInBlock,subtractPizzaInBlock} from "../redux/actions/cart";
import {Link} from "react-router-dom";

export const Cart = () => {

    const dispatch = useDispatch();
    const {cartItems, totalPrice, totalCount} = useSelector( ({cart}) => {
        return {
            cartItems: cart.items,
            totalCount: cart.totalCount,
            totalPrice : cart.totalPrice,
        }
    });

    const emptyCart = !Object.keys(cartItems).length;

    const arrCartItems = Object.keys(cartItems).map((rootKey) => {
        return cartItems[rootKey][0];
    });

    const onRemoveCartItem = (id) => {
        dispatch(removePizzaById(id));
    };
    const onClearCart = () => {
        dispatch(clearCart());
    };
    const onAddPizzaById = (id) => {
        dispatch(addPizzaInBlock(id))
    };
    const onSubtractPizzaById = (id) => {
        dispatch(subtractPizzaInBlock(id))
    };

    return (
        <div className="container container--cart">
            {emptyCart ?
                <CartEmpty/>
                :
                <div className="cart">
                    <CartHeader clearCart={onClearCart} />
                    <div className="content__items">
                        {arrCartItems.map((item,index) => (
                             <CartItem1 key={`${item.id}__${index}`} {...item}
                                countAdded={cartItems[item.id].length} onRemove={onRemoveCartItem}
                                onAddPizza={onAddPizzaById} onSubtractPizza={onSubtractPizzaById}
                            />
                        ))}
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__bottom-details">
                            <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                            <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                        </div>
                        <div className="cart__bottom-buttons">
                            <Link to="/">
                                <Button outline cart add goBack>
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Вернуться назад</span>
                                </Button>
                            </Link>
                            <Button pay>
                                <span>Оплатить сейчас</span>
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};