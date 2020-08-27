import React from "react";
import PropTypes from "prop-types";

import StyleCardMoves from "./index.style";
import CardStyle from "./index.loading";

const Card = props => {
    const { randomBackground, children } = props;
    const randomColourOne = "#50a1d8".replace(/0/g, function() {
        return (~~(Math.random() * 16)).toString(16);
    });
    const randomColourTwo = "#000000".replace(/0/g, function() {
        return (~~(Math.random() * 16)).toString(16);
    });
    return (
        <CardStyle
            randomBackground={randomBackground}
            style={{
                background: randomBackground
                    ? `linear-gradient(135deg, 
                        ${randomColourOne} 0, 
                        ${randomColourTwo} 100%)`
                    : "#fff",
            }}
        >
            {children}
        </CardStyle>
    );
};

Card.defaultProps = {
    name: "",
    randomBackground: false,
    children: false,
};
Card.propTypes = {
    /**
      `name` for name of card
      */
    name: PropTypes.string,
    /**
      Use `level` for level of moves by default false
      */
    level: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
    /**
      Use `randomBackground` for set randombackground is true or false
      */
    randomBackground: PropTypes.bool,
    /**
      Use `wave` for set wave bacground is true or false
      */
    wave: PropTypes.bool,
    /**
      Use `width` for set width of card components
      */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    /**
      `children` for element children text or title
      */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.bool]).isRequired,
};

export default Card;
