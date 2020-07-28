import * as React from "react";
import Card from "../Card/Card";

interface uiDocCardProps {
    /** backgroundColor of the doc card */
    backgroundColor: string;
}

export default function uiDocCard(
    props: React.PropsWithChildren<uiDocCardProps>
) {
    const { backgroundColor, children } = props;

    return (
        <Card className="var-docs">
            <div
                style={{
                    alignItems: "center",
                    backgroundColor: backgroundColor,
                    borderBottom: "1px solid var(--ui-gray-light)",
                    color: "white",
                    display: "flex",
                    height: "100px",
                    justifyContent: "center",
                    marginBottom: "15px",
                    width: "100%",
                }}
            ></div>
            {children}
        </Card>
    );
}
