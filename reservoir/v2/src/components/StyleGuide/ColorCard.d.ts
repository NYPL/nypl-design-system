import { PropsWithChildren } from "react";
export declare const colorContrastData: {
    brand: {
        primary: {
            dataBlackColor: string[];
            dataWhiteColor: string[];
            textColor: string;
        };
        secondary: {
            dataBlackColor: string[];
            dataWhiteColor: string[];
            textColor: string;
        };
    };
    ui: {
        black: {
            dataBlackColor: string[];
            dataWhiteColor: string[];
            textColor: string;
        };
        gray: {
            xxxxDark: {
                dataBlackColor: any[];
                dataWhiteColor: any[];
                textColor: string;
            };
            xxxDark: {
                dataBlackColor: any[];
                dataWhiteColor: any[];
                textColor: string;
            };
            xxDark: {
                dataBlackColor: any[];
                dataWhiteColor: any[];
                textColor: string;
            };
            xDark: {
                dataBlackColor: any[];
                dataWhiteColor: any[];
                textColor: string;
            };
            dark: {
                dataBlackColor: any[];
                dataWhiteColor: any[];
                textColor: string;
            };
            semiDark: {
                dataBlackColor: any[];
                dataWhiteColor: any[];
                textColor: string;
            };
            medium: {
                dataBlackColor: any[];
                dataWhiteColor: any[];
                textColor: string;
            };
            semiMedium: {
                dataBlackColor: any[];
                dataWhiteColor: any[];
                textColor: string;
            };
            lightCool: {
                dataBlackColor: string[];
                dataWhiteColor: string[];
                textColor: string;
            };
            xLightCool: {
                dataBlackColor: string[];
                dataWhiteColor: string[];
                textColor: string;
            };
            xxLightCool: {
                dataBlackColor: string[];
                dataWhiteColor: string[];
                textColor: string;
            };
            lightWarm: {
                dataBlackColor: string[];
                dataWhiteColor: string[];
                textColor: string;
            };
            xLightWarm: {
                dataBlackColor: string[];
                dataWhiteColor: string[];
                textColor: string;
            };
        };
        white: {
            dataBlackColor: string[];
            dataWhiteColor: string[];
            textColor: string;
        };
    };
    dark: {
        ui: {
            gray: {
                xxDark: {
                    dataHeadingColor: string[];
                    dataBodyColor: string[];
                };
                xDark: {
                    dataHeadingColor: string[];
                    dataBodyColor: string[];
                };
            };
        };
    };
};
export declare const cssVars: {
    brand: {
        name: string;
        dataBlackColor: string[];
        dataWhiteColor: string[];
        textColor: string;
    }[];
    blogs: {
        colorSource: string;
        name: string;
        dataBlackColor: any[];
        dataWhiteColor: any[];
        textColor: string;
    }[];
    booksAndMore: {
        colorSource: string;
        name: string;
        dataBlackColor: string[];
        dataWhiteColor: string[];
        textColor: string;
    }[];
    connect: {
        name: string;
        dataBlackColor: any[];
        dataWhiteColor: any[];
        textColor: string;
    }[];
    education: {
        name: string;
        dataBlackColor: string[];
        dataWhiteColor: string[];
        textColor: string;
    }[];
    locations: {
        colorSource: string;
        name: string;
        dataBlackColor: string[];
        dataWhiteColor: string[];
        textColor: string;
    }[];
    research: {
        name: string;
        dataBlackColor: string[];
        dataWhiteColor: string[];
        textColor: string;
    }[];
    researchLibraries: ({
        name: string;
        dataBlackColor: string[];
        dataWhiteColor: string[];
        textColor: string;
        colorSource?: undefined;
    } | {
        colorSource: string;
        name: string;
        dataBlackColor: string[];
        dataWhiteColor: string[];
        textColor: string;
    })[];
    whatsOn: ({
        name: string;
        dataBlackColor: string[];
        dataWhiteColor: string[];
        textColor: string;
        colorSource?: undefined;
    } | {
        colorSource: string;
        name: string;
        dataBlackColor: string[];
        dataWhiteColor: string[];
        textColor: string;
    })[];
    ui: ({
        colorSource: string;
        name: string;
        dataBlackColor: any[];
        dataWhiteColor: any[];
        textColor: string;
        dataBgPageColor?: undefined;
        dataBgDefaultColor?: undefined;
        dataBrandPrimaryColor?: undefined;
        dataBrandSecondaryColor?: undefined;
    } | {
        colorSource: string;
        name: string;
        dataBlackColor: any[];
        dataWhiteColor: any[];
        dataBgPageColor: string[];
        dataBgDefaultColor: string[];
        textColor: string;
        dataBrandPrimaryColor?: undefined;
        dataBrandSecondaryColor?: undefined;
    } | {
        name: string;
        dataBlackColor: any[];
        dataWhiteColor: any[];
        dataBgPageColor: any[];
        dataBgDefaultColor: any[];
        textColor: string;
        colorSource?: undefined;
        dataBrandPrimaryColor?: undefined;
        dataBrandSecondaryColor?: undefined;
    } | {
        colorSource: string;
        name: string;
        dataBlackColor: string[];
        dataWhiteColor: string[];
        dataBrandPrimaryColor: any[];
        dataBrandSecondaryColor: any[];
        dataBgPageColor: string[];
        dataBgDefaultColor: any[];
        textColor: string;
    })[];
    grayscaleRoot: {
        name: string;
        dataBlackColor: string[];
        dataWhiteColor: string[];
        textColor: string;
    }[];
    grayscaleCool: {
        name: string;
        dataBlackColor: any[];
        dataWhiteColor: any[];
        textColor: string;
    }[];
    grayscaleWarm: {
        name: string;
        dataBlackColor: string[];
        dataWhiteColor: string[];
        textColor: string;
    }[];
    dark: ({
        colorSource: string;
        name: string;
        dataBlackColor: any[];
        dataWhiteColor: any[];
        dataHeadingColor: string[];
        dataBodyColor: string[];
        textColor: string;
        dataDarkBgPageColor?: undefined;
        dataDarkBgDefaultColor?: undefined;
        dataBrandPrimaryColor?: undefined;
        dataBrandSecondaryColor?: undefined;
    } | {
        colorSource: string;
        name: string;
        dataBlackColor: any[];
        dataWhiteColor: any[];
        dataDarkBgPageColor: any[];
        dataDarkBgDefaultColor: any[];
        textColor: string;
        dataHeadingColor?: undefined;
        dataBodyColor?: undefined;
        dataBrandPrimaryColor?: undefined;
        dataBrandSecondaryColor?: undefined;
    } | {
        name: string;
        dataBlackColor: any[];
        dataWhiteColor: any[];
        dataDarkBgPageColor: any[];
        dataDarkBgDefaultColor: any[];
        textColor: string;
        colorSource?: undefined;
        dataHeadingColor?: undefined;
        dataBodyColor?: undefined;
        dataBrandPrimaryColor?: undefined;
        dataBrandSecondaryColor?: undefined;
    } | {
        name: string;
        dataDarkBgPageColor: string[];
        dataDarkBgDefaultColor: string[];
        dataBlackColor: string[];
        dataWhiteColor: string[];
        dataHeadingColor: string[];
        dataBodyColor: string[];
        textColor: string;
        colorSource?: undefined;
        dataBrandPrimaryColor?: undefined;
        dataBrandSecondaryColor?: undefined;
    } | {
        colorSource: string;
        name: string;
        dataBlackColor: any[];
        dataWhiteColor: any[];
        dataBrandPrimaryColor: any[];
        dataBrandSecondaryColor: any[];
        dataDarkBgPageColor: any[];
        dataDarkBgDefaultColor: any[];
        textColor: string;
        dataHeadingColor?: undefined;
        dataBodyColor?: undefined;
    })[];
};
export declare const makeColorCard: (data: any) => import("@emotion/react/jsx-runtime").JSX.Element;
export declare const getColorCards: (category: any) => any[];
export interface DataTableProps {
    /** Contrast and WCAG compliance data related to the color ui.bg.page when
     * used with the current color. */
    dataBgPageColor: string[];
    /** Contrast and WCAG compliance data related to the color ui.bg.default when
     * used with the current color. */
    dataBgDefaultColor: string[];
    /** Contrast and WCAG compliance data related to the color dark.ui.bg.page when
     * used with the current color. */
    dataDarkBgPageColor: string[];
    /** Contrast and WCAG compliance data related to the color dark.ui.bg.default when
     * used with the current color. */
    dataDarkBgDefaultColor: string[];
    /** Contrast and WCAG compliance data related to the color black when used
     * with the current color. */
    dataBlackColor: string[];
    /** Contrast and WCAG compliance data related to the NYPL Brand primary color
     * when used with the current color. */
    dataBrandPrimaryColor: string[];
    /** Contrast and WCAG compliance data related to the default color for basic
     * text elements when used with the current color. */
    dataDarkBodyColor?: string[];
    /** Contrast and WCAG compliance data related to the NYPL Brand secondary color
     * when used with the current color. */
    dataBrandSecondaryColor: string[];
    /** Contrast and WCAG compliance data related to the default color for
     * heading elements when used with the current color. */
    dataDarkHeadingColor?: string[];
    /** Contrast and WCAG compliance data related to the color white when used
     * with the current color. */
    dataWhiteColor: string[];
    /** The color to use for text in the color card. */
    textColor: string;
}
export interface ColorCardProps extends DataTableProps {
    /** The backgroundColor of the color card. */
    backgroundColor: string;
    /** The name of a color's javascript theme object. */
    colorName: string;
    /** The name of the color that the current color is based on. */
    colorSource: string;
}
export declare const DataTable: (props: PropsWithChildren<DataTableProps>) => import("@emotion/react/jsx-runtime").JSX.Element;
export declare const ColorCard: (props: PropsWithChildren<ColorCardProps>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default ColorCard;
