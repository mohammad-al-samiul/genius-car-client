import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useLoggedInUser = () => {
  const { loading, user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  //console.log(token);
  const { data: loggedUser, isLoading: isUserLoading } = useQuery({
    queryKey: ["current", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`https://genius-car-server-iota-ochre.vercel.app/api/user/current`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return res.json();
    },
  });
  //console.log(loggedUser);
  return [loggedUser, isUserLoading];
};

export default useLoggedInUser;
