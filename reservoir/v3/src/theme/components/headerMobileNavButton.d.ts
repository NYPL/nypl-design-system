declare const HeaderMobileNavButton: {
  baseStyle: ({ isOpen }: { isOpen: any }) => {
    alignItems: string;
    backgroundColor: string;
    border: string;
    borderRadius: string;
    display: string;
    justifyContent: string;
    svg: {
      fill: string;
      marginLeft: string;
    };
    _hover: {
      backgroundColor: string;
      svg: {
        fill: string;
      };
    };
    _focus: {
      borderRadius: string;
      outlineColor: string;
      outlineOffset: string;
      outlineStyle: string;
      outlineWidth: string;
    };
    _dark: {
      backgroundColor: string;
      svg: {
        fill: string;
      };
    };
  };
};
export default HeaderMobileNavButton;
