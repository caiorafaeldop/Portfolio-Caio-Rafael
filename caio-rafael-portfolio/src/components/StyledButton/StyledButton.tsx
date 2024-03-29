import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  const StyledButton = styled("button")(({ theme }) => ({
    borderRadius: "3px",
    backgroundColor: "transparent",
    padding: "5px 15px",
    width: "100%",
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  }));
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
};

export default StyledButton;
