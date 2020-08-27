import React from "react";
import PropTypes from "prop-types";
import ReadMoreStyle from "./index.style";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../../atoms/button";

const ReadMore = props => {
    return (
        <ReadMoreStyle>
            <Button
                onClick={props.onClick}
                box
                iconPosition="right"
                color="link"
                icon={<IoIosArrowForward size={24} />}
            >
                Read More
            </Button>
        </ReadMoreStyle>
    );
};

ReadMore.defaultProps = {
    onClick: () => {},
};
ReadMore.propTypes = {
    /**
      `onClick` for trigger click
      */
    onClick: PropTypes.func.isRequired,
};

export default ReadMore;
