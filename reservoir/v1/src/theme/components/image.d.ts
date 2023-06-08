interface CustomImageBaseStyle {
    size: keyof typeof imageSizes;
}
interface CustomImageWrapperBaseStyle {
    ratio: keyof typeof imageRatios;
    size: keyof typeof imageSizes;
}
declare const imageSizes: {
    default: {
        maxWidth: string;
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
declare const imageRatios: {
    fourByThree: {
        paddingBottom: string;
        position: string;
        width: string;
        height: string;
        overflow: string;
    };
    oneByTwo: {
        paddingBottom: string;
        position: string;
        width: string;
        height: string;
        overflow: string;
    };
    original: {
        position: string;
        width: string;
        height: string;
        overflow: string;
    };
    sixteenByNine: {
        paddingBottom: string;
        position: string;
        width: string;
        height: string;
        overflow: string;
    };
    square: {
        paddingBottom: string;
        position: string;
        width: string;
        height: string;
        overflow: string;
    };
    threeByFour: {
        paddingBottom: string;
        position: string;
        width: string;
        height: string;
        overflow: string;
    };
    threeByTwo: {
        paddingBottom: string;
        position: string;
        width: string;
        height: string;
        overflow: string;
    };
    twoByOne: {
        paddingBottom: string;
        position: string;
        width: string;
        height: string;
        overflow: string;
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
    baseStyle: ({ size }: CustomImageBaseStyle) => {
        figure: {
            img: {
                backgroundColor: string;
                marginBottom: string;
                _dark: {
                    backgroundColor: string;
                };
            };
            maxWidth: string;
            margin: string;
            width: string;
        } | {
            img: {
                backgroundColor: string;
                marginBottom: string;
                _dark: {
                    backgroundColor: string;
                };
            };
            maxWidth: string;
            marginStart: string;
            marginEnd: string;
            margin: string;
            width: string;
        } | {
            img: {
                backgroundColor: string;
                marginBottom: string;
                _dark: {
                    backgroundColor: string;
                };
            };
            maxWidth: string;
            marginStart: string;
            marginEnd: string;
            margin: string;
            width: string;
        } | {
            img: {
                backgroundColor: string;
                marginBottom: string;
                _dark: {
                    backgroundColor: string;
                };
            };
            maxWidth: string;
            marginStart: string;
            marginEnd: string;
            margin: string;
            width: string;
        } | {
            img: {
                backgroundColor: string;
                marginBottom: string;
                _dark: {
                    backgroundColor: string;
                };
            };
            maxWidth: string;
            marginStart: string;
            marginEnd: string;
            margin: string;
            width: string;
        } | {
            img: {
                backgroundColor: string;
                marginBottom: string;
                _dark: {
                    backgroundColor: string;
                };
            };
            maxWidth: string;
            marginStart: string;
            marginEnd: string;
            margin: string;
            width: string;
        };
        figcaption: {
            fontStyle: string;
            fontSize: string;
        };
        img: {
            _dark: {
                backgroundColor: string;
            };
            maxWidth: string;
            display: string;
            backgroundColor: string;
            boxSizing: string;
            objectFit: string;
            position: string;
            width: string;
        } | {
            _dark: {
                backgroundColor: string;
            };
            maxWidth: string;
            marginStart: string;
            marginEnd: string;
            display: string;
            backgroundColor: string;
            boxSizing: string;
            objectFit: string;
            position: string;
            width: string;
        } | {
            _dark: {
                backgroundColor: string;
            };
            maxWidth: string;
            marginStart: string;
            marginEnd: string;
            display: string;
            backgroundColor: string;
            boxSizing: string;
            objectFit: string;
            position: string;
            width: string;
        } | {
            _dark: {
                backgroundColor: string;
            };
            maxWidth: string;
            marginStart: string;
            marginEnd: string;
            display: string;
            backgroundColor: string;
            boxSizing: string;
            objectFit: string;
            position: string;
            width: string;
        } | {
            _dark: {
                backgroundColor: string;
            };
            maxWidth: string;
            marginStart: string;
            marginEnd: string;
            display: string;
            backgroundColor: string;
            boxSizing: string;
            objectFit: string;
            position: string;
            width: string;
        } | {
            _dark: {
                backgroundColor: string;
            };
            maxWidth: string;
            marginStart: string;
            marginEnd: string;
            display: string;
            backgroundColor: string;
            boxSizing: string;
            objectFit: string;
            position: string;
            width: string;
        };
        captionWrappers: {
            marginTop: string;
        };
    };
};
declare const CustomImageWrapper: {
    parts: string[];
    baseStyle: ({ ratio, size, }: CustomImageWrapperBaseStyle) => {
        crop: {
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
        };
        img: {
            backgroundColor: string;
            height: string;
            left: string;
            maxWidth: string;
            position: string;
            top: string;
            width: string;
            _dark: {
                backgroundColor: string;
            };
        };
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
        width: string;
    } | {
        crop: {
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
        };
        img: {
            backgroundColor: string;
            height: string;
            left: string;
            maxWidth: string;
            position: string;
            top: string;
            width: string;
            _dark: {
                backgroundColor: string;
            };
        };
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
        width: string;
    } | {
        crop: {
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
        };
        img: {
            backgroundColor: string;
            height: string;
            left: string;
            maxWidth: string;
            position: string;
            top: string;
            width: string;
            _dark: {
                backgroundColor: string;
            };
        };
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
        width: string;
    } | {
        crop: {
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
        };
        img: {
            backgroundColor: string;
            height: string;
            left: string;
            maxWidth: string;
            position: string;
            top: string;
            width: string;
            _dark: {
                backgroundColor: string;
            };
        };
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
        width: string;
    } | {
        crop: {
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
        };
        img: {
            backgroundColor: string;
            height: string;
            left: string;
            maxWidth: string;
            position: string;
            top: string;
            width: string;
            _dark: {
                backgroundColor: string;
            };
        };
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
        width: string;
    } | {
        crop: {
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
        };
        img: {
            backgroundColor: string;
            height: string;
            left: string;
            maxWidth: string;
            position: string;
            top: string;
            width: string;
            _dark: {
                backgroundColor: string;
            };
        };
        maxWidth: string;
        marginStart: string;
        marginEnd: string;
        width: string;
    };
};
export { CustomImage, CustomImageWrapper };
