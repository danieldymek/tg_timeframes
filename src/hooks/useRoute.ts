import { useNavigate } from "react-router-dom";

const useRoute = (path: string) => {
  const navigate = useNavigate();
  return () => navigate(path);
};

export default useRoute;
