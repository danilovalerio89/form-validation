import {
  Box,
  Button,
  Center,
  Fieldset,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useRegistrationForm } from "@/features/registration-form/hooks/useRegistrationForm";
import { PersonalInfoFields } from "@/features/registration-form/components/PersonalInfoFields";
import { EmailFields } from "@/features/registration-form/components/EmailFields";
import { CountrySelect } from "@/features/registration-form/components/CountrySelect";
import { DateOfBirthPicker } from "@/features/registration-form/components/DateOfBirthPicker";
import { TermsCheckbox } from "@/features/registration-form/components/TermsCheckbox";

export function RegistrationForm() {
  const { form, onSubmit } = useRegistrationForm();
  const { formState } = form;

  return (
    <Box>
      <Center>
        <Heading>Form Validation</Heading>
      </Center>

      <Center>
        <form onSubmit={onSubmit}>
          <Fieldset.Root size="lg" maxW="md">
            <Stack>
              <Fieldset.Legend>Form</Fieldset.Legend>
              <Fieldset.HelperText>Formulário para teste</Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <PersonalInfoFields form={form} />
              <EmailFields form={form} />
              <CountrySelect form={form} />
            </Fieldset.Content>

            <DateOfBirthPicker form={form} />
            <TermsCheckbox form={form} />

            <Button
              type="submit"
              alignSelf="flex-start"
              loading={formState.isSubmitting}
            >
              Submit
            </Button>
          </Fieldset.Root>
        </form>
      </Center>
    </Box>
  );
}
