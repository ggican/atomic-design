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
        font-size: 16px;
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
        color: ${props => color[props.color]};
        font-family: "Muli", sans-serif;
        font-size: 16.3px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: 0.5px;
        line-height: 1.72;
        text-align: ${props => props.align || "left"};
    `,
    BodyTwo: styled.p`
        color: ${props => color[props.color]};
        font-family: "Muli", sans-serif;
        font-size: 14.2px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: 0.25px;
        line-height: 1.41;
        text-align: ${props => props.align || "left"};
    `,
    SubtitleOne: styled.span`
        color: ${props => color[props.color]};
        display: ${props => (props.block ? "block" : "inline-block")};
        font-family: "Muli", sans-serif;
        font-size: 16.3px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: 0.15px;
        line-height: 1.48;
        text-align: ${props => props.align || "left"};
    `,
    SubtitleTwo: styled.span`
        color: ${props => color[props.color]};
        display: ${props => (props.block ? "block" : "inline-block")};
        font-family: "Muli", sans-serif;
        font-size: 14.2px;
        font-stretch: normal;
        font-style: normal;
        font-weight: ${props => props.fontWeight || "normal"};
        letter-spacing: 0.2px;
        line-height: 1.69;
        text-align: ${props => props.align || "left"};
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
