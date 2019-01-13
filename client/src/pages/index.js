import { splitter } from "common-functions";
const Home = splitter(() => import("pages/home"));
export { Home };
