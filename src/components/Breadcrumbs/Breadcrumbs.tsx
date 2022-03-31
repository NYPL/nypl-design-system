import * as React from "react";
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useStyleConfig,
} from "@chakra-ui/react";

import Icon from "../Icons/Icon";
import {
  IconNames,
  IconRotationTypes,
  IconSizes,
  IconTypes,
} from "../Icons/IconTypes";
import generateUUID from "../../helpers/generateUUID";
import { BreadcrumbsTypes } from "./BreadcrumbsTypes";
import { getVariant } from "../../utils/utils";

export interface BreadcrumbsDataProps {
  url: string;
  text: string | React.ReactNode;
}

export interface BreadcrumbProps {
  /** Optionally pass in additional Chakra-based styles. */
  additionalStyles?: { [key: string]: any };
  /** Breadcrumb links as an array */
  breadcrumbsData: BreadcrumbsDataProps[];
  /** Used to control how the `Hero` component will be rendered. */
  breadcrumbsType?: BreadcrumbsTypes;
  /** className you can add in addition to 'input' */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
}

const getElementsFromData = (data, breadcrumbsID) => {
  if (!data?.length) {
    return {};
  }

  const breadcrumbItems = data.map((breadcrumbData, index) => (
    <BreadcrumbItem
      key={index}
      isCurrentPage={index === data.length - 1 ? true : false}
    >
      <BreadcrumbLink href={breadcrumbData.url}>
        {index === data.length - 2 && (
          <Icon
            name={IconNames.Arrow}
            size={IconSizes.Small}
            iconRotation={IconRotationTypes.Rotate90}
            id={`${breadcrumbsID}__backarrow`}
            className="breadcrumbs-icon"
            type={IconTypes.Breadcrumbs}
          />
        )}
        <span className="breadcrumb-label">{breadcrumbData.text}</span>
      </BreadcrumbLink>
    </BreadcrumbItem>
  ));

  return breadcrumbItems;
};

function Breadcrumbs(props: React.PropsWithChildren<BreadcrumbProps>) {
  const {
    additionalStyles = {},
    breadcrumbsData,
    breadcrumbsType,
    className,
    id = generateUUID(),
  } = props;
  const variant = getVariant(breadcrumbsType, BreadcrumbsTypes);

  if (!breadcrumbsData || breadcrumbsData.length === 0) {
    throw new Error(
      "NYPL Reservoir Breadcrumbs: No data was passed to the `breadcrumbsData` prop."
    );
  }

  const styles = useStyleConfig("Breadcrumb", { variant });
  const finalStyles = { ...styles, ...additionalStyles };
  const breadcrumbItems = getElementsFromData(breadcrumbsData, id);
  const ariaAttrs = { "aria-label": "Breadcrumb" };

  return (
    <ChakraBreadcrumb
      className={className}
      id={id}
      {...ariaAttrs}
      __css={finalStyles}
    >
      {breadcrumbItems}
    </ChakraBreadcrumb>
  );
}

export default Breadcrumbs;
