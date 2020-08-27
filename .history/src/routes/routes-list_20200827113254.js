import { lazy } from "react";

const routeList = [
    {
        path: "/",
        component: lazy(() => import("../pages/home")),
        role: ["GUEST"],
    },
    {
        path: "/login",
        component: lazy(() => import("../pages/pokemon-detail")),
        style: {
            header: {
                withBackButton: true,
            },
        },
        role: ["GUEST"],
    },
];

export default routeList;
