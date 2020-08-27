import styled from "styled-components";
import PropTypes from "prop-types";

const fontStyle = props => {
    const { fontWeight = "regular", style = "primary", color = "darkGrey", size } = props;
    return `font-size: ${size};  
        font-family: 'Red Hat Display', sans-serif;
        font-stretch: normal;
        font-style: normal;
        color:${props => props.color.mainColor[color]}
        font-weight: ${fontWeight};
        letter-spacing: normal;
        line-height: normal;
    `;
};

fontStyle.defaultProps = {
    fontWeight: "regular",
    color: "darkGrey",
};

fontStyle.propTypes = {
    /** size variant for the font */
    size: PropTypes.oneOf(["lg", "sm", "md"]),
    /** fontWeight variant for the font */
    fontWeight: PropTypes.oneOf(["regular", "bold", "medium"]),
    /** style color for the colorFont */
    color: PropTypes.oneOf([
        "green",
        "yellow",
        "lightGreen",
        "whiteGreen",
        "lightYellow",
        "white",
        "darkGrey",
        "grey",
        "lightGrey",
        "whiteGrey",
    ]),
};

const HeadingText = {
    One: styled.h1`
        ${props => fontStyle({ ...props, ...{ size: "24px" } })}
    `,
    Two: styled.h2`
        ${props => fontStyle({ ...props, ...{ size: "18px" } })}
    `,
    Three: styled.h3`
        ${props => fontStyle({ ...props, ...{ size: "16px" } })}
    `,
    Four: styled.h4`
        ${props => fontStyle({ ...props, ...{ size: "14px" } })}
    `,
};

const Text = {
    Title: styled.p`
        ${props => fontStyle({ ...props, ...{ size: "14px" } })}
    `,

    Subtitle: styled.p`
        ${props => fontStyle({ ...props, ...{ size: "12px" } })}
    `,
    SubtitleTwo: styled.span`
        ${props => fontStyle({ ...props, ...{ size: "10px" } })}
    `,
    Caption: styled.span`
        ${props => fontStyle({ ...props, ...{ size: "8px" } })}
    `,
};

export default HeadingText;
