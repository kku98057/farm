import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Cookies from "js-cookie";
import { AtomMyFarm } from "../store";
import { useLocation, useSearchParams } from "react-router-dom";

export default function useUpdate({
  url,
  isAlert,
  params,
}: {
  url: string;
  isAlert?: string;
  params?: { [key: string]: any };
}) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const TOKEN = searchParams.get("token");

  const {
    mutate,

    isSuccess,
    isError,
  } = useMutation({
    mutationFn: async (data: any) => {
      return axios.post(`${process.env.REACT_APP_BASE_URL}${url}`, data, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          // "Content-Type": "multipart/form-data",
          "Content-Type": "application/json",
        },
        params: params,
      });
    },
  });

  return { mutate, isSuccess, isError };
}
