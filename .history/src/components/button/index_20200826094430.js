import styled from "styled-components";

const ButtonStyle = styled.button`
    background: #fff;
    border: 1px solid transparent;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    display: ${props => (props.block ? "block" : "inline-block")};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    outline: none;
    padding: 0.375rem 0.75rem;
    position: relative;
    text-align: center;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
    &:enabled {
    }
    &:active {
    }
`;

const Button = props => {
    const { text } = props;
    return <ButtonStyle {...props}>{text}</ButtonStyle>;
};

const defaultPropsType = {
    onSubmit: () => {},
    onClick: () => {},
    type: "button",
    element: () => {},
};

const interFace = {
    renderLoading: PropTypes.func.isRequired,
    renderFailed: PropTypes.func.isRequired,
    renderSuccess: PropTypes.func.isRequired,
    renderBeforeReady: PropTypes.func.isRequired,
    service: PropTypes.shape({
        serviceFunction: PropTypes.func.isRequired,
        params: PropTypes.object,
        data: PropTypes.object,
        isReady: PropTypes.bool,
        group: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
    }).isRequired,
};

export default Button;
