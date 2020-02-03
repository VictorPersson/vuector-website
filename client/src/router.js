import Contact from "./components/Contact/Contact.vue"
import Wishlist from "./components/Wishlist/Wishlist.vue"
import LewParPink from "./components/Contact/LewParPink.vue"
import CV from "./components/CV/CV.vue"
import Projects from "./components/Projects/Projects.vue"


export const routes = [
    { name: "", path: "/", meta: {hideContent: false}},
    { name: "contact", path: "/contact", component: Contact, meta: {hideContent: true}},
    { name: "project", path: "/projects", component: Projects, meta: {hideContent: true}},
    { name: "cv", path: "/cv", component: CV, meta: {hideContent: true}},
    { name: "wishlist", path: "/wishlist", component: Wishlist, meta: {hideContent: true}},
    { name: "asmrdarlinglew", path: "/asmrdarlinglew", component: LewParPink, meta: {hideContent: true}}
];