import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "dashboard",
        component: () => import("../components/DefaultLayout.vue"),
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: () => import("../views/Dashboard.vue"),
            },
            {
                path: "surveys",
                name: "Surveys",
                component: () => import("../views/Surveys.vue"),
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue"),
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
