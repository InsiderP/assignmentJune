import api from "../../api/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useSignIn = () => {
  const router = useRouter();
  const signIn = useMutation({
    mutationFn: async (obj) => {
      const res = await api.post("/user/create", obj);
      return res?.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      router.push("/login");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return signIn;
};

export default useSignIn;
