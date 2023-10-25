import { Stack, Typography } from '@mui/joy'
import Icon from '../../UI/Icon'
import Image from 'next/image'

const onboardingSteps = [
  { number: 1, label: 'Create project' },
  { number: 2, label: 'Setup' },
  { number: 3, label: 'Start' },
]

export default function OnboardingSidebar({ steps }) {
  return (
    <Stack
      position="fixed"
      zIndex={999}
      display="flex"
      direction="row"
      minHeight="100vh"
      bgcolor="primary.500"
    >
      <Stack
        minHeight="100vh"
        paddingX={1.2}
        paddingY={2.5}
        borderRight={1}
        alignItems="center"
        borderColor="neutral.700"
      >
        <Stack maxHeight="100vh">
          <Image
            src="/images/logo-small.svg"
            alt="Logo voidr"
            width={37}
            height={37}
          />
        </Stack>
      </Stack>

      <Stack
        borderRight={1}
        borderColor="neutral.700"
        justifyContent="space-between"
        paddingX={3}
        paddingY={2.5}
      >
        <Stack gap={4} height="100%" maxHeight="95vh">
          <Typography
            textColor="neutral.200"
            fontWeight="600"
            fontSize={19}
            paddingTop={0.5}
            paddingBottom={3}
          >
            voidr | Images
          </Typography>
          <Stack maxHeight="fit-content" position="relative" gap={5}>
            {onboardingSteps?.map((onboardingStep) => {
              const passedStepsSuccefully =
                onboardingStep.number < steps.current + 1

              const actualStep = steps.current + 1 === onboardingStep.number

              return (
                <Stack
                  key={onboardingStep.number}
                  direction="row"
                  alignItems="center"
                  zIndex={9}
                  gap={2}
                >
                  <Stack
                    padding={2.3}
                    borderRadius={100}
                    border={2}
                    borderColor={actualStep ? 'neutral.100' : 'primary.100'}
                    width={30}
                    height={30}
                    justifyContent="center"
                    alignItems="center"
                    maxWidth="fit-content"
                    bgcolor="primary.500"
                  >
                    <Typography
                      textColor={actualStep ? 'neutral.100' : 'primary.100'}
                      lineHeight={0}
                      level="body-lg"
                    >
                      {passedStepsSuccefully ? (
                        <Icon id="Check_Mark" width={17} height={17} />
                      ) : (
                        onboardingStep.number
                      )}
                    </Typography>
                  </Stack>
                  <Typography
                    textColor={actualStep ? 'neutral.100' : 'primary.100'}
                  >
                    {onboardingStep.label}
                  </Typography>
                </Stack>
              )
            })}
            <Stack
              position="absolute"
              width="1.5px"
              left="20px"
              height="100%"
              bgcolor="neutral.500"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}