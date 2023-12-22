import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { useSetRecoilState } from "recoil";
import { AtomLoading } from "../store";

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

  const { data, isLoading, isSuccess, error, isFetching } = useQuery({
    queryKey: [url, params],
    queryFn: async () => {
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

  return { data, isLoading, isSuccess, error, isFetching };
}
