import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import type { StepIconProps } from "@mui/material/StepIcon";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

type VerticalLinearStepperProps = {
  steps: { label: string; desc: string }[];
  current: number;
};

const CustomStepIconRoot = styled("div")<{
  ownerState: { active?: boolean; completed?: boolean };
}>(({ ownerState }) => ({
  color: ownerState.active || ownerState.completed ? "#ffffff" : "#ffffff",
  display: "flex",
  height: 24,
  width: 24,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor:
    ownerState.active || ownerState.completed ? "#1faf87" : "gray",
  fontSize: 14,
}));

function CustomStepIcon(props: StepIconProps) {
  const { active, completed, icon } = props;
  return (
    <CustomStepIconRoot ownerState={{ active, completed }}>
      {icon}
    </CustomStepIconRoot>
  );
}

export function VerticalLinearStepper({
  current,
  steps,
}: VerticalLinearStepperProps) {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={current} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.desc}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
