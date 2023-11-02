import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  currentStep: number
  size: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => {
          return <Step key={step} active={currentStep >= step}></Step>
        })}
      </Steps>
    </MultiStepContainer>
  )
}