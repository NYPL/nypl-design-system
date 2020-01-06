import * as React from "react";

import Label from "./Label";

export default {
  title: "Label",
  component: Label,
};

export const label = () => <Label id="label-id" referenceId="should-never-be-used-alone"><div>Lonely</div></Label>;
