import Card, { CardHeading, CardContent } from "../Card/Card";
import ImageExample from "../../utils/ImageExample";
import SimpleGrid from "../Grid/SimpleGrid";
import { getPlaceholderImage } from "../../utils/utils";

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

export const cardsIllustrative = (
  <SimpleGrid columns={4} mt="s">
    <CardExample
      description="Voluptatibus non explicabo enim  est similique aspernatur."
      imageProps={{
        aspectRatio: "twoByOne",
        border: "0",
        isCropped: true,
        src: getPlaceholderImage(),
      }}
      title="Baby books"
    />
    <CardExample
      description="Distinctio impedit est velit quos blanditiis voluptatem molestias."
      imageProps={{
        aspectRatio: "twoByOne",
        border: "0",
        isCropped: true,
        src: getPlaceholderImage(),
      }}
      title="Kid books"
    />
    <CardExample
      description="Magnam qui doloribus officiis et neque quia nihil voluptate sed quia iusto."
      imageProps={{
        aspectRatio: "twoByOne",
        border: "0",
        isCropped: true,
        src: getPlaceholderImage(),
      }}
      title="Teen books"
    />
    <CardExample
      description="Vel illum nihil maxime et atque odio nobis iusto."
      imageProps={{
        aspectRatio: "twoByOne",
        border: "0",
        isCropped: true,
        src: getPlaceholderImage(),
      }}
      title="Adult books"
    />
  </SimpleGrid>
);

export const cardsInformational = (
  <SimpleGrid columns={4} mt="s">
    <CardExample
      description="Commodi voluptas consequuntur vitae sint ut sint."
      imageProps={{
        border: "0",
        src: "https://secure.syndetics.com/index.aspx?isbn=9780399558184/lc.gif&client=nyplvega&type=unbound",
      }}
      title="Look! I Wrote a Book!"
    />
    <CardExample
      description="Non rerum at aspernatur ut magnam ab suscipit delectus."
      imageProps={{
        border: "0",
        src: "https://secure.syndetics.com/index.aspx?isbn=9780525579649/lc.gif&client=nyplvega&type=unbound",
      }}
      title="All Are Welcome"
    />
    <CardExample
      description="Minus rerum aliquam fugiat quos ratione maiores ipsa et omnis."
      imageProps={{
        border: "0",
        src: "https://secure.syndetics.com/index.aspx?isbn=9781524719371/lc.gif&client=nyplvega&type=unbound",
      }}
      title="The Cardboard Kingdom"
    />
    <CardExample
      description="Nihil impedit qui tempora cumque illo porro voluptate quidem voluptas et."
      imageProps={{
        border: "0",
        src: "https://secure.syndetics.com/index.aspx?isbn=9780670479580/lc.gif&client=nyplvega&type=unbound",
      }}
      title="Miss Rumphius"
    />
  </SimpleGrid>
);
