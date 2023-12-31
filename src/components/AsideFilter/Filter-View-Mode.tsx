import { useState } from "react";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { FilterIcon } from "lucide-react";

import { CustomizedPaper } from "~/components/atomic";

import { AsideFilter, SelectedItemsBox } from "./";

import { useDeviceType } from "~/hooks";

type TProps = { modeType: "doctor" | "clinic" };

const MobileMode = ({ modeType }: TProps) => {
  const [openModal, setOpenModal] = useState(false);
  const { isWidth600, isSmDown } = useDeviceType();
  const { custom } = useTheme().palette;

  return (
    <>
      <CustomizedPaper
        sx={{ p: isSmDown ? "24px 16px 28px 16px" : "32px 32px 40px 32px" }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb="16px"
        >
          <Typography variant="h5" color={custom.primary20}>
            Ви обрали
          </Typography>

          <Typography variant="body2" color={custom.primary20}>
            лікарів
          </Typography>
        </Stack>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<FilterIcon />}
          onClick={() => setOpenModal(true)}
        >
          Фільтр
        </Button>
      </CustomizedPaper>

      <Dialog
        sx={{
          "& .MuiPaper-root": { borderRadius: isWidth600 ? 0 : "26px" },
        }}
        maxWidth="md"
        fullScreen={isWidth600}
        scroll={"body"}
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <DialogContent
          sx={{
            minWidth: "380px",
            maxWidth: "1000px",
            p: isWidth600 ? "44px" : "80px",

            justifyContent: "center",
            height: "100%",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              p: 0,
              top: isWidth600 ? "22px" : "28px",
              right: isWidth600 ? "22px" : "28px",
            }}
            aria-label="close"
            onClick={() => setOpenModal(false)}
          >
            <CloseIcon fontSize={isWidth600 ? "medium" : "large"} />
          </IconButton>

          <SelectedItemsBox modeType={modeType} />

          <AsideFilter modeType={modeType} />
        </DialogContent>
      </Dialog>
    </>
  );
};

const DesktopMode = ({ modeType }: TProps) => {
  return (
    <Box sx={{ maxWidth: "328px", width: "100%" }}>
      <CustomizedPaper sx={{ p: "24px 24px 32px 24px" }}>
        <SelectedItemsBox modeType={modeType} />
      </CustomizedPaper>

      <CustomizedPaper sx={{ p: "24px 24px 32px 24px" }}>
        <AsideFilter modeType={modeType} />
      </CustomizedPaper>
    </Box>
  );
};

export const FilterViewMode = ({ modeType }: TProps) => {
  const { isMdDown } = useDeviceType();

  return isMdDown ? (
    <MobileMode modeType={modeType} />
  ) : (
    <DesktopMode modeType={modeType} />
  );
};
