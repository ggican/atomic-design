import styled from "styled-components";

const HeadingText = {
    One: styled.h1`
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

StyledButton.propTypes = {
    /** enable block styling on the button */
    block: bool,
    /** size variant for the button */
    size: oneOf(["lg", "sm", "md"]),
    /** style variant for the button */
    style: oneOf(["primary", "grey", "darkgrey", "link", "danger"]),,
}

StyledButton.defaultProps = {
    size: "md",
    style: "primary",,
}

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
