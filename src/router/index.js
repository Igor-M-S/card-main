import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/carrinho.vue";
import About from "@/views/loja.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;