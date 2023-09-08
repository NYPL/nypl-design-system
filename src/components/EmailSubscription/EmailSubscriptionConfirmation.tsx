import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Icon, IconNames } from "../Icons/Icon";

export type StatusCode = "SUCCESS" | "ERROR" | "TEST_MODE";

const iconTable: Record<StatusCode, IconNames> = {
  SUCCESS: "check",
  TEST_MODE: "speakerNotes",
  ERROR: "errorOutline",
};

interface EmailSubscriptionConfirmationProps {
  id: string;
  status: StatusCode;
  bgColor?: string;
  headingColor?: string;
}

export default function EmailSubscriptionConfirmation({
  id,
  bgColor,
  headingColor,
  status,
}: EmailSubscriptionConfirmationProps) {
  // Manage focus to ensure accessibility when confirmation message is rendered
  const confirmationMessageRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    confirmationMessageRef.current?.focus();
  }, []);

  function getStatusMessage(status: StatusCode): string {
    if (status === "SUCCESS") {
      return "Thank you! You have successfully subscribed to our email updates! You can update your email subscription preferences at any time using the links at the bottom of the email.";
    }
    if (status === "ERROR") {
      return "An error has occurred while attempting to save your information. Please refresh this page and try again. If this error persists, <a href='mailto:enews@nypl.org?subject=Please re-activate my e-mail address'>contact our e-mail team</a>.";
    }
    if (status === "TEST_MODE") {
      return "Test mode ....";
    } else {
      return "UNKNOWN STATUS";
    }
  }

  return (
    <Box id={`email-subscription-confirmation-${id}`} w="full">
      <Icon
        decorative
        size="large"
        name={iconTable[status]}
        color={bgColor}
        bgColor={headingColor}
        borderRadius="50%"
      />
      <Box
        ref={confirmationMessageRef}
        tabIndex={-1}
        alignSelf="center"
        textAlign="center"
        marginStart="s"
        mb="0"
        sx={{ a: { color: "ui.white", textDecoration: "underline" } }}
        dangerouslySetInnerHTML={{ __html: getStatusMessage(status) }}
      />
    </Box>
  );
}
