import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "../Button/Button";
import { Form, FormField, FormRow } from "../Form/Form";
import { Text } from "../Text/Text";
import { TextInput } from "../TextInput/TextInput";

interface EmailSubscriptionFormProps {
  id: string;
  description?: string;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: string) => void;
  formInput?: string;
  formPlaceholder?: string;
  formHelperText: string;
}

export default function EmailSubscriptionForm({
  id,
  description,
  onSubmit,
  onChange,
  formInput,
  formPlaceholder,
  formHelperText,
}: EmailSubscriptionFormProps): React.ReactElement {
  return (
    <>
      <Text fontSize="1">{description}</Text>
      <Form
        id="email-subscription-form"
        onSubmit={(e) => onSubmit(e)}
        gap="grid.s"
        maxW="415px"
        w={{ base: "full" }}
      >
        <FormRow gridTemplateColumns={{ base: "repeat(1fr)", md: "2fr auto" }}>
          <FormField>
            <TextInput
              isRequired
              id={`email-input-${id}`}
              labelText="Email Address"
              value={formInput}
              type="email"
              name="email"
              showHelperInvalidText={false}
              textAlign="start"
              sx={{ input: { color: "ui.black" } }}
              placeholder={formPlaceholder}
              onChange={(e) => {
                onChange(e.target.value);
              }}
            />
          </FormField>
          <FormField alignItems="flex-end">
            <Button
              id={`email-submit-button-${id}`}
              type="submit"
              borderColor="ui.white"
              color="ui.white"
              border="1px solid"
              bg="transparent"
              sx={{ _hover: { bg: "initial" } }}
            >
              Submit
            </Button>
          </FormField>
        </FormRow>
      </Form>
      <Box
        fontStyle="italic"
        mt="1rem"
        fontSize="-1"
        dangerouslySetInnerHTML={{ __html: formHelperText }}
        sx={{ a: { color: "ui.white", textDecoration: "underline" } }}
      />
    </>
  );
}
