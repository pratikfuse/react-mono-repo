import ComponentLoader from "../../Hoc/ComponentLoader";

export default ComponentLoader({
  loader: () => import("./router"),
});
