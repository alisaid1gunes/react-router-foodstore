import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
import Foods from "../components/food/Foods";
import NotFound from "../components/base/NotFound";
import FoodDetail from "../components/food/FoodDetail";
import Search from "../components/Search";
const links = [
  { link: "/", title: "Home", component: Home, isExact: true, isLink: true },
  {
    link: "/search",
    title: "Search",
    component: Search,
    isExact: true,
    isLink: false,
  },
  {
    link: "/contact",
    title: "Contact",
    component: Contact,
    isExact: true,
    isLink: true,
  },
  {
    link: "/foods/:foodID",
    title: "Foods",
    component: FoodDetail,
    isExact: true,
    isLink: false,
  },
  {
    link: "/about",
    title: "About",
    component: About,
    isExact: true,
    isLink: true,
  },
  {
    link: "/foods",
    title: "All Foods",
    component: Foods,
    isExact: true,
    isLink: true,
  },
  { link: "", title: "404", component: NotFound, isExact: true, isLink: false },
];
export default links;
