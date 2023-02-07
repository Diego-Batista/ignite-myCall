import { Box, styled, Text } from "@ignite-ui/react";

export const ConfirmForm = styled(Box, {
  maxWidth: 540,
  margin: "$6 auto 0",
  display: "flex",
  flexDirection: "column",
  gap: "$4",

  label: {
    display: "flex",
    flexDirection: "column",
    gap: "$2",
  },
});

export const FormHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",

  paddingBottom: "$6",
  marginBottom: "$2",
  borderBottom: "1px solid $gray600",

  [`> ${Text}`]: {
    display: "flex",
    alignItems: "center",
    gap: "$2",

    svg: {
      color: "$gray200",
      width: "$5",
      height: "$5",
    },
  },
});

export const FormError = styled(Text, {
  color: "#F75A68",
});

export const FormActions = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  gap: "$2",
  marginTop: "$2",

  "@media (max-width: 900px)": {
    justifyContent: "space-between",
  },
});

export const InputPhoneContainer = styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "baseline",

  "&:has(input:focus)": {
    borderColor: "$ignite300",
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});
