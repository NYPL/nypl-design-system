import Card, { CardHeading, CardContent } from "../Card/Card";
import ImageExample from "../../utils/ImageExample";
import Link from "../Link/Link";

export const fullClickCard = (
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
    mainActionLink="https://nypl.org"
  >
    <CardHeading level="h4" size="heading7">
      Etiam venenatis justo
    </CardHeading>
    <CardContent>
      Sequi id nihil eum nemo nemo ut enim unde dolor harum rerum et
      accusantium.
    </CardContent>
  </Card>
);
export const distinctLinksCard = (
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
    <CardHeading level="h4" size="heading7" url="https://nypl.org">
      Etiam venenatis justo!
    </CardHeading>
    <CardContent>
      Sequi id at{" "}
      <Link variant="action" href="https://nypl.org">
        NYPL
      </Link>{" "}
      nihil eum nemo nemo ut enim unde dolor harum rerum accusantium.
      <Link
        variant="buttonSecondary"
        href="https://nypl.org"
        mt="xs"
        width="100%"
      >
        Read more
      </Link>
    </CardContent>
  </Card>
);
