import React from "react";
import PropTypes from 'prop-types'

export const SortPopup = React.memo (({onClickSort, activeSortBy}) => {

    const [visiblePopup, setVisiblePopup] = React.useState(false);

    const popupRef = React.useRef(null);

    const items = [
        {name : 'популярности', type : 'popular', },
        {name : 'цене', type : 'price'},
        {name : 'алфавиту', type : 'name'},
    ];

    const onSelectSortItem = (index) => {
        onClickSort(items[index].type);
        setVisiblePopup(false);
    }

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }

    const onOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if(!path.includes(popupRef.current)){
            setVisiblePopup(false);
        }
    }

    React.useEffect(() => {

        document.addEventListener('click', onOutsideClick);

        return () => {
            document.addEventListener('click', onOutsideClick);
        };
    }, []);


    return (
        <div className="sort" ref={popupRef}>
            <div className="sort__label">
                <svg onClick={toggleVisiblePopup} className={visiblePopup ? 'rotated' : null}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>
                    {items.find((item) => item.type === activeSortBy).name}
                </span>
            </div>
            {visiblePopup && <div className="sort__popup">
                <ul>
                    {items.map((item,index) => (
                        <li className={item.type === activeSortBy ? 'active' : null}
                            key={`${item.name}+${index}`} onClick={() => onSelectSortItem(index)}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
    );
});

SortPopup.propTypes = {
    onClickSort : PropTypes.func.isRequired,
    items : PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}
SortPopup.defaultProps = {
    activeSortBy: 'popular',
    items: [],
}