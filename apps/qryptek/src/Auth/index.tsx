import React from "react";
import withAsync from "src/helpers/withAsync";

export default withAsync(() => import("./router"), <div>asdfasdf</div>);
