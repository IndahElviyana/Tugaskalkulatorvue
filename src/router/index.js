import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Kalkulator from "@/pages/Kalkulator.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
     },
     {
        path: "/about",
        name: "About",
        component: About,
     },
     {
         path: "/kalkulator",
         name: "Kalkulator",
         component: Kalkulator
     }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;