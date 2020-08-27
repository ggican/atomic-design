import styled from "styled-components";
// import PropTypes from 'prop-types';
import color from "../tokens/color";

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

const Text = {
    BodyOne: styled.p`
        font-size: 24px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `,
    BodyTwo: styled.p`
        font-size: 24px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `,
    SubtitleOne: styled.span`
        font-size: 24px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `,
    SubtitleTwo: styled.span`
        font-size: 24px;
        font-stretch: normal;
        font-style: normal;
        font-weight: bold;
        letter-spacing: normal;
        line-height: normal;
    `,
    Overline: styled.h5`
        color: ${props => color[props.color]};
        font-family: "Muli", sans-serif;
        font-size: 12.2px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: 2px;
        line-height: 1.31;
        text-align: ${props => props.align || "left"};
    `,
    Caption: styled.span`
        color: ${props => color[props.color]};
        display: ${props => (props.block ? "block" : "inline-block")};
        font-family: "Muli", sans-serif;
        font-size: 12.2px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: 0.4px;
        line-height: 1.31;
        text-align: ${props => props.align || "left"};
    `,
};

export { Text, HeadingText };
