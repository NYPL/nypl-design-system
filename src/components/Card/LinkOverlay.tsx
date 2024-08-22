import React, { forwardRef } from "react";
import { Box } from "@chakra-ui/react";

interface LinkOverlayProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

export const LinkOverlay = forwardRef<HTMLAnchorElement, LinkOverlayProps>(
  ({ external, target, rel, style, ...rest }, ref) => {
    return (
      <a
        {...rest}
        ref={ref}
        target={external ? "_blank" : target}
        rel={external ? "noopener noreferrer" : rel}
        style={{
          position: "relative",
          display: "block",
          textDecoration: "none",
          outline: "2px green solid",
          ...style,
        }}
      >
        <span
          style={{
            content: "''",
            cursor: "inherit",
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        {rest.children}
      </a>
    );
  }
);

interface LinkBoxProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LinkBox = forwardRef<HTMLDivElement, LinkBoxProps>(
  ({ style, ...rest }, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          position: "relative",
          outline: "2px red solid",
          ":hover": { cursor: "pointer" },
          "& a[href], abbr[title]": {
            position: "relative",
            zIndex: 1,
          },
        }}
        {...rest}
      >
        {rest.children}
      </Box>
    );
  }
);
