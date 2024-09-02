import { useRouter } from "expo-router";

const useSearchParams = () => {
  const router = useRouter();
  const params = new URLSearchParams(router.asPath.split("?")[1]);
  return Object.fromEntries(params.entries());
};

export default useSearchParams;
