import * as React from "react";
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useStyleConfig,
} from "@chakra-ui/react";
import generateUUID from "../../helpers/generateUUID";
import { ColorVariants } from "./BreadcrumbsTypes";
import Icon from "../Icons/Icon";
import { IconNames, IconRotationTypes, IconSizes } from "../Icons/IconTypes";

//  * Map the ButtonType to the Button Chakra theme variant object. If a wrong
//  * value is passed (typically in non-Typescript scenarios), then the default
//  * is the "primary" variant.
const getVariant = (variant, collection, fallback = null) => {
  // Used to map between enum values and Chakra variant options.
  const variantMap = {};
  for (const type in collection) {
    variantMap[collection[type]] = collection[type];
  }
  return variantMap[variant] || fallback;
};

export interface BreadcrumbstDataProps {
  url: string;
  text: string | React.ReactNode;
}

export interface BreadcrumbProps {
  /** Breadcrumb links as an array */
  breadcrumbsData: BreadcrumbstDataProps[];
  /** className you can add in addition to 'input' */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Used to control how the `Hero` component will be rendered. */
  colorVariant?: ColorVariants;
}

const getElementsFromData = (data, breadcrumbsID) => {
  const breadcrumbItems = [];

  if (!data?.length) {
    return {};
  }

  data.map((breadcrumbData, index) => {
    const tempCrumb = (
      <BreadcrumbItem
        key={index}
        isCurrentPage={index === data.length - 1 ? true : false}
      >
        <BreadcrumbLink href={breadcrumbData.url}>
          {index === data.length - 2 && (
            <Icon
              name={IconNames.arrow}
              size={IconSizes.small}
              iconRotation={IconRotationTypes.rotate90}
              id={`${breadcrumbsID}__backarrow`}
              decorative={true}
              titleText={breadcrumbData.text}
            />
          )}
          <span className="breadcrumb-label">{breadcrumbData.text}</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
    );

    breadcrumbItems.push(tempCrumb);
  });

  return breadcrumbItems;
};

function Breadcrumbs(props: React.PropsWithChildren<BreadcrumbProps>) {
  const {
    breadcrumbsData,
    className,
    colorVariant,
    id = generateUUID(),
  } = props;
  const variant = getVariant(colorVariant, ColorVariants);

  if (breadcrumbsData.length === 0) {
    throw new Error(
      "You must use the `breadcrumbsData` prop to pass a data object to the Breadcrumbs component. That prop is current empty."
    );
  }

  const styles = useStyleConfig("Breadcrumb", { variant });
  const breadcrumbItems = getElementsFromData(breadcrumbsData, id);

  return (
    <ChakraBreadcrumb className={className} __css={styles} id={id}>
      {breadcrumbItems}
    </ChakraBreadcrumb>
  );
}

export { Breadcrumbs, BreadcrumbItem, BreadcrumbLink };
