import Card, { CardHeading, CardContent } from "../Card/Card";
import { Box } from "@chakra-ui/react";
import { getPlaceholderImage } from "../../utils/utils";

export const ImageExample = (props) => {
  const {
    aspectRatio = "square",
    backgroundColor = "var(--nypl-colors-ui-bg-default)",
    border = "1px solid #333",
    src = getPlaceholderImage(),
    isCropped = false,
  } = props;
  const aspectRatioValues = {
    fourByOne: "25%",
    twoByOne: "50%",
    sixteenByNine: "56.25%",
    fourByThree: "75%",
    oneByOne: "100%",
    square: "100%",
    oneByTwo: "200%",
  };
  return (
    <Box>
      <Box
        style={{
          background: backgroundColor,
          border: border,
          position: "relative",
          paddingBottom: aspectRatioValues[aspectRatio],
        }}
      >
        <Box
          as="img"
          alt=""
          src={src}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            objectFit: isCropped ? "cover" : "contain",
            color: "transparent",
          }}
        />
      </Box>
    </Box>
  );
};

export const CardExample = (props) => {
  const {
    description = "Sequi id nihil eum nemo nemo ut enim unde dolor harum rerum et accusantium at. Omnis minus voluptate et voluptas qui. Libero earum enim fugit aliquam.",
    imageProps,
    title = "Etiam venenatis justo",
  } = props;
  return (
    <Card
      imageProps={{
        component: (
          <ImageExample
            backgroundColor={imageProps.backgroundColor}
            border={imageProps.border}
            aspectRatio={imageProps.aspectRatio}
            isCropped={imageProps.isCropped}
            src={imageProps.src}
          />
        ),
      }}
      layout="column"
    >
      <CardHeading level="h4" size="heading7">
        {title}
      </CardHeading>
      <CardContent>{description}</CardContent>
    </Card>
  );
};

export const cardTwoByOne = (
  <Card
    imageProps={{
      component: (
        <ImageExample
          border="0"
          aspectRatio="twoByOne"
          isCropped
          src="/placeholder-photo.png"
        />
      ),
    }}
    layout="column"
  >
    <CardHeading level="h4" size="heading7">
      Etiam venenatis justo
    </CardHeading>
    <CardContent>
      Sequi id nihil eum nemo nemo ut enim unde dolor harum rerum et accusantium
      at. Omnis minus voluptate et voluptas qui. Libero earum enim fugit
      aliquam.
    </CardContent>
  </Card>
);
export const cardSquare = (
  <Card
    imageProps={{
      alt: "Alt text",
      aspectRatio: "square",
      isLazy: true,
      size: "default",
      src: "/placeholder-photo.png",
    }}
    layout="column"
  >
    <CardHeading level="h4" size="heading7">
      Etiam venenatis justo
    </CardHeading>
    <CardContent>
      Sequi id nihil eum nemo nemo ut enim unde dolor harum rerum et accusantium
      at. Omnis minus voluptate et voluptas qui. Libero earum enim fugit
      aliquam.
    </CardContent>
  </Card>
);
export const cardThreeByFour = (
  <Card
    imageProps={{
      alt: "Alt text",
      aspectRatio: "threeByFour",
      isLazy: true,
      size: "default",
      src: "/placeholder-photo.png",
    }}
    layout="column"
  >
    <CardHeading level="h4" size="heading7">
      Etiam venenatis justo
    </CardHeading>
    <CardContent>
      Sequi id nihil eum nemo nemo ut enim unde dolor harum rerum et accusantium
      at. Omnis minus voluptate et voluptas qui. Libero earum enim fugit
      aliquam.
    </CardContent>
  </Card>
);
