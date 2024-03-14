interface LogoBaseStyle {
    size: keyof typeof size | keyof typeof sizeBasedOnHeight;
    sizeBasedOn: "height" | "width";
}
declare const size: {
    default: {
        maxWidth: string;
    };
    xxsmall: {
        maxWidth: string;
    };
    xsmall: {
        maxWidth: string;
    };
    small: {
        maxWidth: string;
    };
    medium: {
        maxWidth: string;
    };
    large: {
        maxWidth: string;
    };
    xlarge: {
        maxWidth: string;
    };
    xxlarge: {
        height: string;
        width: string;
    };
    xxxlarge: {
        height: string;
        width: string;
    };
};
declare const sizeBasedOnHeight: {
    default: {
        maxHeight: string;
    };
    xxsmall: {
        maxHeight: string;
    };
    xsmall: {
        maxHeight: string;
    };
    small: {
        maxHeight: string;
    };
    medium: {
        maxHeight: string;
    };
    large: {
        maxHeight: string;
    };
    xlarge: {
        maxHeight: string;
    };
    xxlarge: {
        height: string;
        width: string;
    };
    xxxlarge: {
        height: string;
        width: string;
    };
};
declare const Logo: {
    baseStyle: (props: LogoBaseStyle) => {
        svg: {
            maxWidth: string;
            display: string;
            height: string;
            width: string;
        } | {
            height: string;
            width: string;
            display: string;
        } | {
            maxHeight: string;
            display: string;
            height: string;
            width: string;
        };
        maxWidth: string;
        display: string;
        height: string;
        width: string;
    } | {
        svg: {
            maxWidth: string;
            display: string;
            height: string;
            width: string;
        } | {
            height: string;
            width: string;
            display: string;
        } | {
            maxHeight: string;
            display: string;
            height: string;
            width: string;
        };
        height: string;
        width: string;
        display: string;
    } | {
        svg: {
            maxWidth: string;
            display: string;
            height: string;
            width: string;
        } | {
            height: string;
            width: string;
            display: string;
        } | {
            maxHeight: string;
            display: string;
            height: string;
            width: string;
        };
        maxHeight: string;
        display: string;
        height: string;
        width: string;
    };
};
export default Logo;
