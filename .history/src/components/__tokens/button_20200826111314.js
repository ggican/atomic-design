import color from "./color";

const buttonToken = {
    button: {
        size: {
            lg: {
                padding: "0.844rem 0.844rem",
                fontSize: "18px",
                fontWeght: "bold",
            },
            md: {
                padding: "0.625rem 0.695rem",
                fontSize: "16px",
                fontWeght: "bold",
            },
            sm: {
                padding: "0.07rem 0.5rem",
                height: "20px",
                fontSize: "12px",
                fontWeght: "bold",
            },
        },
        color: {
            primary: {
                variant: {
                    enabled: {
                        backgroundColor: color.mainColor.lightGreen,
                        borderColor: color.mainColor.lightGreen,
                        color: "#fff",
                        borderRadius: "20px",
                    },
                    active: {
                        backgroundColor: color.mainColor.green,
                        color: "#fff",
                        borderColor: color.mainColor.green,
                        borderRadius: "20px",
                    },
                    disabled: {
                        backgroundColor: color.mainColor.whiteGrey,
                        color: "#fff",
                        borderColor: color.mainColor.whiteGrey,
                        borderRadius: "20px",
                    },
                },
            },
            secondary: {
                variant: {
                    enabled: {
                        backgroundColor: color.mainColor.lightGreen,
                        borderColor: color.mainColor.lightGreen,
                        color: "#fff",
                        borderRadius: "20px",
                    },
                    active: {
                        backgroundColor: color.mainColor.green,
                        color: "#fff",
                        borderColor: color.mainColor.green,
                        borderRadius: "20px",
                    },
                    disabled: {
                        backgroundColor: color.mainColor.whiteGrey,
                        color: "#fff",
                        borderColor: color.mainColor.whiteGrey,
                        borderRadius: "20px",
                    },
                },
            },
            white: {
                variant: {
                    enabled: {
                        backgroundColor: color.mainColor.white,
                        color: color.mainColor.lightGreen,
                        borderRadius: "20px",
                    },
                    active: {
                        backgroundColor: color.mainColor.lightGreen,
                        color: color.mainColor.white,
                        borderColor: color.mainColor.lightGreen,
                        borderRadius: "20px",
                    },
                },
            },
            link: {
                variant: {
                    enabled: {
                        color: color.mainColor.grey,
                        border: 0,
                        backgroundColor: "transparent",
                    },
                    active: {
                        color: color.mainColor.darkGrey,
                        border: 0,
                        backgroundColor: "transparent",
                    },
                },
            },
        },
    },
};

export default buttonToken;
