import * as React from "react";
import bem from "../../utils/bem";

const SectionName = ({ children }) => <div className={bem('main', ['research'])} >{children}</div>;

export default SectionName;
