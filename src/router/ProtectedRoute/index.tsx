import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectActiveUser } from "../../redux/feature/AuthSlice";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {

  const activeUser = useSelector(selectActiveUser);

  if (!activeUser)
    return <Navigate to="/" />

  return children
}