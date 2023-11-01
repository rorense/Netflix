import useSWR from "swr";
import fetcher from "@/libs/fetcher";

// Custom hook to get current user using SWR
// No need for state management
const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
