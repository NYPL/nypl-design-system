import * as React from "react";
import Tabs from "./Tabs";

export default {
    title: "Tabs",
    component: Tabs,
};

const tabItems = {
    "1": <p>Some content for the first tab item...</p>,
    "2": <p>Content for the second tab item...</p>,
    "3": <p>...And content for the third tab item!</p>,
};

export const tabs = () => <Tabs items={tabItems} id="demo" />;

tabs.storyName = "Tabs";
