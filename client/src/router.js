import Contact from "./components/Contact/Contact.vue"
import LewParPink from "./components/Contact/LewParPink.vue"


export const routes = [
    { name: "Contact", path: "/contact", component: Contact, meta: {hideContent: true} },
    { name: "LewParPink", path: "/asmrdarlinglew", component: LewParPink, meta: {hideContent: true} },
];