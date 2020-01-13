import Contact from "./components/Contact/Contact.vue"
import Wishlist from "./components/Wishlist/Wishlist.vue"
import LewParPink from "./components/Contact/LewParPink.vue"


export const routes = [
    { name: "contact", path: "/contact", component: Contact, meta: {hideContent: true} },
    { name: "wishlist", path: "/wishlist", component: Wishlist, meta: {hideContent: true} },
    { name: "asmrdarlinglew", path: "/asmrdarlinglew", component: LewParPink, meta: {hideContent: true} }
];