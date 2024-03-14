interface CustomImageBaseStyle {
    ratio: keyof typeof imageRatios;
    size: keyof typeof imageSizes | keyof typeof imageSizesBasedOnHeight;
    sizeBasedOn: "height" | "width";
}
declare const imageSizes: {
    default: {
        maxWidth: string;
    };
    xxxsmall: {
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
    };
    xxsmall: {
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
    };
    xsmall: {
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
    };
    small: {
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
    };
    medium: {
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
    };
    large: {
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
    };
};
declare const imageSizesBasedOnHeight: {
    default: {
        maxHeight: string;
        maxWidth: string;
        width: string;
    };
    xxxsmall: {
        maxHeight: string;
        marginStart: string;
        marginEnd: string;
    };
    xxsmall: {
        maxHeight: string;
        marginStart: string;
        marginEnd: string;
    };
    xsmall: {
        maxHeight: string;
        marginStart: string;
        marginEnd: string;
    };
    small: {
        maxHeight: string;
        marginStart: string;
        marginEnd: string;
    };
    medium: {
        maxHeight: string;
        marginStart: string;
        marginEnd: string;
    };
    large: {
        maxHeight: string;
        marginStart: string;
        marginEnd: string;
    };
};
declare const imageRatios: {
    fourByThree: {
        paddingBottom: string;
    };
    oneByTwo: {
        paddingBottom: string;
    };
    original: {};
    sixteenByNine: {
        paddingBottom: string;
    };
    square: {
        paddingBottom: string;
    };
    threeByFour: {
        paddingBottom: string;
    };
    threeByTwo: {
        paddingBottom: string;
    };
    twoByOne: {
        paddingBottom: string;
    };
};
declare const CustomImage: {
    parts: string[];
    variants: {
        circle: {
            img: {
                borderRadius: string;
            };
        };
    };
    baseStyle: ({ ratio, size, sizeBasedOn, }: CustomImageBaseStyle) => {
        figure: {
            img: {
                backgroundColor: string;
                marginBottom: string;
                _dark: {
                    backgroundColor: string;
                };
            };
            width: string;
            maxWidth: string;
            margin: string;
        } | {
            img: {
                backgroundColor: string;
                marginBottom: string;
                _dark: {
                    backgroundColor: string;
                };
            };
            width: string;
            maxWidth: string;
            marginStart: string;
            marginEnd: string;
            margin: string;
        } | {
            img: {
                backgroundColor: string;
                marginBottom: string;
                _dark: {
                    backgroundColor: string;
                };
            };
            height: string;
            width: string;
            maxWidth: string;
            maxHeight: string;
            margin: string;
        } | {
            img: {
                backgroundColor: string;
                marginBottom: string;
                _dark: {
                    backgroundColor: string;
                };
            };
            height: string;
            width: string;
            maxWidth: string;
            maxHeight: string;
            marginStart: string;
            marginEnd: string;
            margin: string;
        } | {
            img: {
                backgroundColor: string;
                marginBottom: string;
                _dark: {
                    backgroundColor: string;
                };
            };
            height: string;
            width: string;
            maxHeight: string;
            marginStart: string;
            marginEnd: string;
            margin: string;
        };
        figcaption: {
            fontStyle: string;
        };
        img: {
            _dark: {
                backgroundColor: string;
            };
            width: string;
            maxWidth: string;
            display: string;
            backgroundColor: string;
            boxSizing: string;
            objectFit: string;
            position: string;
        } | {
            _dark: {
                backgroundColor: string;
            };
            width: string;
            maxWidth: string;
            marginStart: string;
            marginEnd: string;
            display: string;
            backgroundColor: string;
            boxSizing: string;
            objectFit: string;
            position: string;
        } | {
            _dark: {
                backgroundColor: string;
            };
            height: string;
            maxWidth: string;
            maxHeight: string;
            width: string;
            display: string;
            backgroundColor: string;
            boxSizing: string;
            objectFit: string;
            position: string;
        } | {
            _dark: {
                backgroundColor: string;
            };
            height: string;
            maxWidth: string;
            maxHeight: string;
            marginStart: string;
            marginEnd: string;
            display: string;
            backgroundColor: string;
            boxSizing: string;
            objectFit: string;
            position: string;
        } | {
            _dark: {
                backgroundColor: string;
            };
            height: string;
            maxHeight: string;
            marginStart: string;
            marginEnd: string;
            display: string;
            backgroundColor: string;
            boxSizing: string;
            objectFit: string;
            position: string;
        };
    };
};
declare const CustomImageWrapper: {
    parts: string[];
    baseStyle: ({ ratio, size, sizeBasedOn, }: CustomImageBaseStyle) => {
        crop: {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        };
        img: {
            backgroundColor: string;
            height: string;
            left: string;
            width: string;
            position: string;
            top: string;
            _dark: {
                backgroundColor: string;
            };
            maxWidth: string;
        } | {
            backgroundColor: string;
            height: string;
            left: string;
            width: string;
            position: string;
            top: string;
            _dark: {
                backgroundColor: string;
            };
            maxHeight: string;
        };
        width: string;
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
    } | {
        crop: {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        };
        img: {
            backgroundColor: string;
            height: string;
            left: string;
            width: string;
            position: string;
            top: string;
            _dark: {
                backgroundColor: string;
            };
            maxWidth: string;
        } | {
            backgroundColor: string;
            height: string;
            left: string;
            width: string;
            position: string;
            top: string;
            _dark: {
                backgroundColor: string;
            };
            maxHeight: string;
        };
        width: string;
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
    } | {
        crop: {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        };
        img: {
            backgroundColor: string;
            height: string;
            left: string;
            width: string;
            position: string;
            top: string;
            _dark: {
                backgroundColor: string;
            };
            maxWidth: string;
        } | {
            backgroundColor: string;
            height: string;
            left: string;
            width: string;
            position: string;
            top: string;
            _dark: {
                backgroundColor: string;
            };
            maxHeight: string;
        };
        height: string;
        maxWidth: string;
        maxHeight: string;
        width: string;
        marginStart: string;
        marginEnd: string;
    } | {
        crop: {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        };
        img: {
            backgroundColor: string;
            height: string;
            left: string;
            width: string;
            position: string;
            top: string;
            _dark: {
                backgroundColor: string;
            };
            maxWidth: string;
        } | {
            backgroundColor: string;
            height: string;
            left: string;
            width: string;
            position: string;
            top: string;
            _dark: {
                backgroundColor: string;
            };
            maxHeight: string;
        };
        height: string;
        maxWidth: string;
        maxHeight: string;
        marginStart: string;
        marginEnd: string;
    } | {
        crop: {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        } | {
            maxWidth: string;
            paddingBottom: string;
            position: string;
            width: string;
            height: string;
            overflow: string;
        };
        img: {
            backgroundColor: string;
            height: string;
            left: string;
            width: string;
            position: string;
            top: string;
            _dark: {
                backgroundColor: string;
            };
            maxWidth: string;
        } | {
            backgroundColor: string;
            height: string;
            left: string;
            width: string;
            position: string;
            top: string;
            _dark: {
                backgroundColor: string;
            };
            maxHeight: string;
        };
        height: string;
        maxHeight: string;
        marginStart: string;
        marginEnd: string;
    };
};
export { CustomImage, CustomImageWrapper };
