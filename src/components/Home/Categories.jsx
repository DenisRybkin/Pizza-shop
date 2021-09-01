import React from "react";
import PropTypes from "prop-types";

export const Categories = React.memo(({onClickCategory,activeCategory}) => {

    const handleActiveItem = (index) => {
        onClickCategory(index);
    };

    const items = [
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ];

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : null}
                    onClick={() =>handleActiveItem(null)}>Все</li>
                {items.map((item, index) => (
                    <li key={index+item} onClick={() => handleActiveItem(index)}
                        className={activeCategory === index ? 'active' : null}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
});

Categories.propTypes = {
    onClickCategory : PropTypes.func.isRequired,
    activeCategory : PropTypes.oneOfType(
        [PropTypes.number.isRequired,
            PropTypes.oneOf([null]).isRequired]
    ),
    items : PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}
Categories.defaultProps = {
    activeCategory: null,
    items: [],
}