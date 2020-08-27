import styled from "styled-components";
import PropTypes from "prop-types";

const HeadingText = ...{
    One: styled.h1`
        ${props => console.log(props, "propsnya")}
        font-size: 24px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `,
    Two: styled.h2`
        font-size: 18px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
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

HeadingText.propTypes = {
    /** size variant for the button */
    size: PropTypes.oneOf(["lg", "sm", "md"]),
    /** style variant for the button */
    style: PropTypes.oneOf(["primary", "grey", "darkgrey", "link", "danger"]),
};

HeadingText.defaultProps = {
    size: "md",
    style: "primary",
    One: {
        coba: "deh",
    },
};

const Text = {
    Title: styled.p`
        font-size: 14px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `,

    Subtitle: styled.p`
        font-size: 12px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `,
    SubtitleTwo: styled.span`
        font-size: 10px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `,
    Caption: styled.span`
        font-size: 8px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `,
};

export { Text, HeadingText };
