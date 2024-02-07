import { Divider, Typography, TypographyProps } from "@mui/material";
import { COLORS } from "../../Theme/Theme";

type Props = {
  title: string;
  textVariant?: TypographyProps["variant"];
  borderThikness?: number;
  fontWeight?: number;
};

const SubHeader = ({
  title,
  textVariant,
  borderThikness,
  fontWeight,
}: Props) => {
  return (
    <>
      <Typography variant={textVariant} fontWeight={fontWeight}>
        {title}
      </Typography>
      <Divider
        sx={{
          borderBottomWidth: borderThikness,
          borderBottomColor: COLORS.primary,
        }}
      />
    </>
  );
};

export default SubHeader;
