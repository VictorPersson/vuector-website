import Contact from "./components/Contact/Contact.vue"
import Wishlist from "./components/Wishlist/Wishlist.vue"
import LewParPink from "./components/Contact/LewParPink.vue"
import CV from "./components/CV/CV.vue"
import Projects from "./components/Projects/Projects.vue"


export const routes = [
    { name: "Home", path: "/", meta: {hideContent: false}},
    { name: "Contact", path: "/contact", component: Contact, meta: {hideContent: true}},
    { name: "Projects", path: "/projects", component: Projects, meta: {hideContent: true}},
    { name: "CV", path: "/cv", component: CV, meta: {hideContent: true}},
    { name: "Wishlist", path: "/wishlist", component: Wishlist, meta: {hideContent: true}},
    { name: "Asmrdarlinglew", path: "/asmrdarlinglew", component: LewParPink, meta: {hideContent: true}}
];