import React from "react";
import Text from "./index.style";

export default {
    title: "Atoms|Typography",
    component: Text,
};

export const Heading = () => (
    <div>
        <Text.One>Heading One</Text.One>
        <Text.Two>Heading Two</Text.Two>
        <Text.Three>Heading Three</Text.Three>
        <Text.Four>Heading Four</Text.Four>
        <Text.SubTitleOne>Heading Four</Text.SubTitleOne>
        <Text.SubTitleTwo>Heading Four</Text.SubTitleTwo>
        <Text.Caption>Heading Four</Text.Caption>
    </div>
);

// export const Color = () => (
//     <div>
//         <Text.One color="green">Heading One</Text.One>
//         <Text.Two color="yellow">Heading Two</Text.Two>
//         <Text.Three color="lightGreen">Heading Three</Text.Three>
//         <Text.Four color="lightYellow">Heading Four</Text.Four>
//         <Text.SubTitleOne color="darkGrey">Heading Four</Text.SubTitleOne>
//         <Text.SubTitleTwo color="grey">Heading Four</Text.SubTitleTwo>
//         <Text.Caption color="lightGrey">Heading Four</Text.Caption>
//     </div>
// );

// export const FontWeight = () => (
//     <div>
//         <Text.One fontWeight="regular">Heading One</Text.One>
//         <Text.One fontWeight="medium">Heading One</Text.One>
//         <Text.One fontWeight="bold">Heading One</Text.One>
//     </div>
// );
