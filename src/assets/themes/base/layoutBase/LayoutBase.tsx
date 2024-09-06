import { Box } from "@mui/material";

interface LayoutBaseProps {
  children: JSX.Element;
}

export const LayoutBase: React.FC<LayoutBaseProps> = ({ children }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {children}
    </Box>
  );
};
