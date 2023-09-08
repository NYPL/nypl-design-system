import * as React from "react";
import { Heading } from "../Heading/Heading";
import { Box } from "@chakra-ui/react";

interface EmailSubscriptionWrapperProps {
  id: string;
  bgColor?: string;
  heading?: string;
  headingColor?: string;
  children?: React.ReactElement;
}

export default function EmailSubscriptionWrapper({
  id,
  bgColor,
  heading,
  headingColor,
  children,
}: EmailSubscriptionWrapperProps): JSX.Element {
  return (
    <Box
      id={`email-subscription-wrapper-${id}`}
      className="email-subscription"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      width="full"
      minH="350px"
      padding="l"
      bgColor={bgColor}
      color={headingColor}
      textAlign="center"
      marginY="m"
    >
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w={{ base: "100%", lg: "85%" }}
      >
        <Heading text={heading} w={{ base: "90%", md: "70%" }} />
        {children}
      </Box>
    </Box>
  );
}
