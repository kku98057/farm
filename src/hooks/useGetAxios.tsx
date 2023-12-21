import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import axios, { AxiosError } from "axios";
import { useSetRecoilState } from "recoil";
import { AtomLoading } from "../store";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
export default function useGetAxios({
  url,
  params,
}: {
  url: string;
  params?: { [key: string]: any };
}) {
  const setGlobalLoading = useSetRecoilState(AtomLoading);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const TOKEN = searchParams.get("token");

  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: [url, params],
    queryFn: async () => {
      setGlobalLoading(true); // 요청 시작 시 로딩 상태 활성화

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}${url}`,
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
              "Content-Type": "application/json",
            },
            params: params ? params : null,
          }
        );

        return response.data;
      } catch (error) {
        console.log(error);
        throw error; // 에러를 다시 throw하여 useQuery의 error 객체에 포함시킵니다.
      } finally {
        setGlobalLoading(false); // 요청 완료 시 로딩 상태 비활성화
      }
    },
  });
  useEffect(() => {
    setGlobalLoading(true);
  }, [isLoading]);

  return { data, isLoading, isSuccess, error };
}
