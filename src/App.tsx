import { RegistrationForm } from "@/features/registration-form/components/RegistrationForm";
import { Box, Center, Heading, Fieldset, Stack } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Center>
        <Heading>Form Validation</Heading>
      </Center>
      <Box>
        <Fieldset.Root size="lg" maxW="md">
          <Stack>
            <Fieldset.Legend>Form</Fieldset.Legend>
            <Fieldset.HelperText>Formulário para teste</Fieldset.HelperText>
          </Stack>

          <RegistrationForm />
        </Fieldset.Root>
      </Box>
    </Box>
  );
}

export default App;
