import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  Dialog,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { CustomizedInput } from "../atomic";

import { TAuthFormValues, useDeviceType } from "~/common";
import {
  RHFBirthDate,
  RHFFirstName,
  RHFLastName,
  RHFMiddleName,
  RHFmobileNum,
} from "../React-Hook-Form-Fields";

interface IProps {
  onSubmit: (data: TAuthFormValues) => void;
  email: string | null;
}

export function PatientPersonalIdentification({ onSubmit, email }: IProps) {
  const [openIdentificationModal, setOpenIdentificationModal] = useState(true);
  const { breakpoints, palette } = useTheme();
  const isWidth380px = useMediaQuery(breakpoints.down("mobile"));
  const isMobile = useDeviceType();

  const { control, handleSubmit, formState } = useForm<TAuthFormValues>({
    mode: "onChange",
    delayError: 1000,
  });

  const { errors } = formState;

  return (
    <Dialog
      fullScreen={isWidth380px}
      scroll="body"
      open={openIdentificationModal}
      // maxWidth="laptop"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: isWidth380px
            ? {
                xs: "0px",
              }
            : "12px",
        },
      }}
      onClose={() => setOpenIdentificationModal(false)}
    >
      <IconButton
        sx={{
          position: "absolute",
          p: 0,
          top: 12,
          right: 12,
        }}
        color="primary"
        onClick={() => setOpenIdentificationModal(false)}
      >
        <CloseIcon />
      </IconButton>

      <Grid
        component="form"
        container
        p="32px"
        gap="24px"
        direction="column"
        maxWidth="712px"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid item></Grid>

        <Grid item textAlign="center">
          <Typography variant="h5">
            Ідентифікація особи та реєстрація
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: "16px", color: palette.custom.neutral60 }}
          >
            Заповніть необхідні поля, аби завершити реєстрацію. Нам потрібна ця
            інформація, аби забезпечити зручність для пацієнтів та медичних
            працівників."
          </Typography>
        </Grid>

        <Grid container columnSpacing="24px">
          <Grid item xs={12} sm={6}>
            <RHFLastName control={control} errors={errors} autoFocus />
          </Grid>

          <Grid item xs={12} sm={6}>
            <RHFFirstName control={control} errors={errors} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <RHFMiddleName control={control} errors={errors} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <RHFBirthDate control={control} errors={errors} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <RHFmobileNum control={control} errors={errors} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <CustomizedInput label="Електронна пошта*" disabled value={email} />
          </Grid>
        </Grid>

        <Button
          variant="text"
          sx={{ pl: "16px", alignSelf: isMobile ? "center" : "flex-start" }}
          onClick={() => {}}
        >
          Чому це важливо?
        </Button>

        <Button
          disabled={!formState.isValid}
          type="submit"
          variant="contained"
          // sx={{ backgroundColor: primaryColor }}
        >
          Завершити реєстрацію
        </Button>
      </Grid>
    </Dialog>
  );
}