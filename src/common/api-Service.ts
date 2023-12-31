import { useCallback, useMemo, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { mockClient } from "./api-mock-client";

import {
  transformRequestData,
  transformResponseData,
  errorHandler,
  coloredLog,
} from "./api-Helpers";

import { useAuthProvider } from "~/providers";

import {
  TSignUpData,
  TLoginData,
  TForgotPassData,
  TAuthFormValues,
  TPatientAdditionalData,
  TResetPassData,
  TPatientPersonalData,
} from "./types-and-interfaces";

const useApiService = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<any>(null);
  const { authenticatedUser } = useAuthProvider();

  const clearApiError = useCallback(() => setApiError(null), []);

  const apiClient = useMemo(() => {
    const client = axios.create({
      baseURL: "https://www.behealth.pp.ua/api/v1/",
    });

    client.interceptors.request.use((config) => {
      const token = authenticatedUser?.token
        ? `Bearer ${authenticatedUser.token}`
        : null;

      // add a token to all requests
      if (config.headers && token) config.headers.Authorization = token;

      // transform data in all requests
      if (config.method === "post" || config.method === "put") {
        console.log("request orig DATA >>>", config.data);
        config.data = transformRequestData(config.data);
        coloredLog("request mod DATA >>>", config.data);
      } else if (config.method === "delete") {
        console.log("request orig PARAMS >>>", config.params);
        config.params = transformRequestData(config.params);
        coloredLog("request mod PARAMS >>>", config.params);
      }

      return config;
    });

    return client;
  }, [authenticatedUser]);

  const _requestWithErrorHandling = useCallback(
    async <T>(request: Promise<AxiosResponse<T>>) => {
      setLoading(true);
      setApiError(null);

      try {
        const response = await request;
        console.log("response orig DATA >>", response.data);
        // array check for mock data
        if (Array.isArray(response.data)) return response.data;

        const data = transformResponseData(response.data);

        coloredLog("response mod DATA >>", data);

        return data;
      } catch (error) {
        setApiError(errorHandler(error));

        return Promise.reject("⬆ Details in the console ⬆");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const signUp = useCallback(
    (data: TSignUpData) =>
      _requestWithErrorHandling(apiClient.post("signup", data)),
    []
  );

  const signIn = useCallback(
    (data: TLoginData) =>
      _requestWithErrorHandling(
        apiClient.post("login", data).then((res) => {
          if (!res.data?.token)
            throw new Error(`// ${res.data} // Token not found in response`);

          return res;
        })
      ),
    []
  );

  const emailConfirmation = useCallback(
    (
      { firstName,middleName, lastName, birthDate, mobileNum }: TAuthFormValues,
      token: string | null
    ) =>
      _requestWithErrorHandling(
        apiClient
          .post(`confirmation?token=${token}`, {
            firstName,
            lastName,
            middleName,
            birthDate,
            mobileNum,
          })
          .then((res) => {
            if (!res.data?.token)
              throw new Error(`// ${res.data} // Token not found in response`);

            return res;
          })
      ),
    []
  );

  const resetPassword = useCallback(
    ({ userType, token, passwordNew }: TResetPassData) =>
      _requestWithErrorHandling(
        apiClient.post(`reset?token=${token}&user_type=${userType}`, {
          passwordNew,
        })
      ),
    []
  );

  const forgotPassword = useCallback(
    (data: TForgotPassData) =>
      _requestWithErrorHandling(apiClient.post("forgot", data)),
    []
  );

  // uses mock data
  const getDoctors = useCallback(
    () => _requestWithErrorHandling(mockClient.get("doctors")),
    []
  );

  // uses mock data
  const getClinics = useCallback(
    () => _requestWithErrorHandling(mockClient.get("clinics")),
    []
  );

  // uses mock data
  const searchClinicsDocs = useCallback(
    (params: { city: string; district: string; query: string }) =>
      _requestWithErrorHandling(
        mockClient.get("search", {
          params: {
            city: params.city,
            district: params.district,
            query: params.query,
          },
        })
      ),
    []
  );

  const getAppointments = useCallback(
    () =>
      _requestWithErrorHandling(apiClient.get("patient-account/appointments")),
    []
  );

  const getPatientAdditionalInfo = useCallback(
    () =>
      _requestWithErrorHandling(
        apiClient.get("patient-account/additional-data")
      ),
    []
  );

  const createPatientAdditionalInfo = useCallback(
    (data: TPatientAdditionalData) =>
      _requestWithErrorHandling(
        apiClient.post("patient-account/additional-data", data)
      ),
    []
  );

  const updatePatientAdditionalInfo = useCallback(
    (data: TPatientAdditionalData) =>
      _requestWithErrorHandling(
        apiClient.put("patient-account/additional-data", data)
      ),
    []
  );

  const deletePatientAdditionalInfo = useCallback(
    (data: TPatientAdditionalData) =>
      _requestWithErrorHandling(
        apiClient.delete("patient-account/additional-data", {
          params: data,
        })
      ),
    []
  );

  const getPatientPersonalInfo = useCallback(
    () =>
      _requestWithErrorHandling(
        apiClient.get("patient-account/personal-information")
      ),
    []
  );

  const createPatientPersonalInfo = useCallback(
    (data: TPatientPersonalData) =>
      _requestWithErrorHandling(
        apiClient.post("patient-account/personal-information", data)
      ),
    []
  );

  const updatePatientPersonalInfo = useCallback(
    (data: TPatientPersonalData) =>
      _requestWithErrorHandling(
        apiClient.put("patient-account/personal-information", data)
      ),
    []
  );

  const deletePatientPersonalInfo = useCallback(
    (data: TPatientPersonalData) =>
      _requestWithErrorHandling(
        apiClient.delete("patient-account/personal-information", {
          params: data,
        })
      ),
    []
  );

  const auth = Object.freeze({
    signUp,
    signIn,
    emailConfirmation,
    forgotPassword,
    resetPassword,
  });

  const patient = Object.freeze({
    getAppointments,
    additionalInfo: Object.freeze({
      get: getPatientAdditionalInfo,
      create: createPatientAdditionalInfo,
      update: updatePatientAdditionalInfo,
      delete: deletePatientAdditionalInfo,
    }),
    personalInfo: Object.freeze({
      get: getPatientPersonalInfo,
      create: createPatientPersonalInfo,
      update: updatePatientPersonalInfo,
      delete: deletePatientPersonalInfo,
    }),
  });

  return Object.freeze({
    loading,
    apiError,
    clearApiError,
    getDoctors,
    getClinics,
    searchClinicsDocs,
    auth,
    patient,
  });
};

export { useApiService };
