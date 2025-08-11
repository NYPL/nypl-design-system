declare const FeedbackBox: {
  baseStyle?: {
    closeButton: {
      /** This is overriding the default min-height value in order to keep the
       * button spacing symmetrical. */
      minHeight: string;
      minWidth: string;
      right: string;
      p: string;
      position: string;
      span: {
        clip: string;
        height: {
          base: string;
          md: string;
        };
        overflow: string;
        position: {
          base: string;
          md: string;
        };
        width: {
          base: string;
          md: string;
        };
        wordWrap: string;
      };
      top: string;
      _dark: {
        svg: {
          fill: string;
        };
      };
    };
    drawerBody: {
      borderLeft: {
        base: any;
        md: "1px solid";
      };
      borderColor: {
        base: any;
        md: "ui.border.default";
      };
      paddingTop: string;
      paddingBottom: string;
      _dark: {
        background: string;
        borderColor: {
          base: any;
          md: "dark.ui.border.default";
        };
      };
    };
    drawerContent: {
      marginStart: string;
      width: {
        base: "100%";
        md: "375px";
      };
      aside: {
        color: string;
        _dark: {
          color: string;
        };
      };
    };
    drawerHeader: {
      alignItems: string;
      background: string;
      borderBottomWidth: string;
      borderLeftWidth: {
        base: any;
        md: "1px";
      };
      borderTopWidth: string;
      color: string;
      display: string;
      fontSize: string;
      fontWeight: string;
      px: string;
      paddingTop: string;
      paddingBottom: string;
      p: {
        marginBottom: "0";
      };
      _dark: {
        background: string;
        borderColor: string;
        color: string;
      };
    };
    openButton: {
      position: string;
      borderRadius: string;
      bottom: string;
      right: string;
      zIndex: string;
      _focus: {
        boxShadow: string;
        zIndex: string;
      };
    };
    radioGroup: {
      ".radioGroupStack": {
        flexDirection: {
          base: "column";
          md: "row";
        };
        gap: {
          base: string;
          md: string;
        };
      };
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: (
        | "radioGroup"
        | "closeButton"
        | "drawerBody"
        | "drawerContent"
        | "drawerHeader"
        | "openButton"
      )[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: (
        | "radioGroup"
        | "closeButton"
        | "drawerBody"
        | "drawerContent"
        | "drawerHeader"
        | "openButton"
      )[];
    }>;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
  parts: (
    | "radioGroup"
    | "closeButton"
    | "drawerBody"
    | "drawerContent"
    | "drawerHeader"
    | "openButton"
  )[];
};
export default FeedbackBox;
