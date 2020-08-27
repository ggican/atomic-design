import styled from "styled-components";
import PropTypes from "prop-types";

const fontStyle = props => {
    console.log(props);
    return `font-size: ${props.size};  
        font-family: 'Red Hat Display', sans-serif;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `;
};

fontStyle.defaultProps = {
    fontWeight: "regular",
    style: "primary",
    color: "darkGrey",
};

fontStyle.propTypes = {
    /** size variant for the button */
    size: PropTypes.oneOf(["lg", "sm", "md"]),
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
        font-size: 16px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `,
    Four: styled.h4`
        font-size: 14px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `,
    Five: styled.h5`
        font-size: 24px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `,
    Six: styled.h6`
        font-size: 24px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `,
};

HeadingText.defaultProps = {
    fontWeight: "regular",
    style: "primary",
    color: "darkGrey",
};

HeadingText.propTypes = {
    /** size variant for the button */
    size: PropTypes.oneOf(["lg", "sm", "md"]),
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
export default HeadingText;

// const Text = {
//     Title: styled.p`
//         font-size: 14px;
//         font-stretch: normal;
//         font-style: normal;
//         font-weight: bold;
//         letter-spacing: normal;
//         line-height: normal;
//     `,

//     Subtitle: styled.p`
//         font-size: 12px;
//         font-stretch: normal;
//         font-style: normal;
//         font-weight: bold;
//         letter-spacing: normal;
//         line-height: normal;
//     `,
//     SubtitleTwo: styled.span`
//         font-size: 10px;
//         font-stretch: normal;
//         font-style: normal;
//         font-weight: bold;
//         letter-spacing: normal;
//         line-height: normal;
//     `,
//     Caption: styled.span`
//         font-size: 8px;
//         font-stretch: normal;
//         font-style: normal;
//         font-weight: bold;
//         letter-spacing: normal;
//         line-height: normal;
//     `,
// };

// export { Text, HeadingText };
