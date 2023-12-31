import { IOnSubmitPatientData,  } from "~/common";
import { usePatientFetchingData } from "~/hooks";

import { CustomizedPaper } from "~/components/atomic";
import {
  PatientAdditionalDataAddress,
  PatientAdditionalDataPrefCat,
  PatientAdditionalDataWorkPlace,
} from "~/components/Patient-additional-data";
import { Skeleton, Stack } from "@mui/material";

export function PatientAccountAdditionalData() {
  const { patientAdditionalData, onSubmitAdditionalData } =
    usePatientFetchingData();

  return (
    <CustomizedPaper>
      <Stack gap="48px">
        {!patientAdditionalData && (
          <Stack gap={2}>
            <Skeleton variant="text" sx={{ height: 150 }} />
            <Skeleton variant="rounded" sx={{ height: 150 }} />
          </Stack>
        )}

        {patientAdditionalData && (
          <>
            <PatientAdditionalDataAddress
              patientAdditionalData={patientAdditionalData}
              onSubmitAdditionalData={
                onSubmitAdditionalData as IOnSubmitPatientData
              }
            />

            <PatientAdditionalDataWorkPlace
              patientAdditionalData={patientAdditionalData}
              onSubmitAdditionalData={
                onSubmitAdditionalData as IOnSubmitPatientData
              }
            />

            <PatientAdditionalDataPrefCat
              patientAdditionalData={patientAdditionalData}
              onSubmitAdditionalData={
                onSubmitAdditionalData as IOnSubmitPatientData
              }
            />
          </>
        )}
      </Stack>
    </CustomizedPaper>
  );
}
