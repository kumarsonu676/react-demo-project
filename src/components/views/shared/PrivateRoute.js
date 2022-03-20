import { Navigate, useLocation } from "react-router-dom";
import { authenticationService } from "../../../services/authentication.service";

//reference url: https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5

export function PrivateRoute(props) {
  const currentUserId = authenticationService.getCurrentUserId();
  const currentUserRole = authenticationService.getCurrentUserRole();
  const location = useLocation();
  const roles = props?.roles || [];

  var isRoleFound = false;
  if (typeof currentUserRole === "string") {
    isRoleFound = roles.indexOf(currentUserRole) > -1;
  } else if (typeof currentUserRole === "object") {
    var roleResult = roles.map((role) =>
      currentUserRole.find((aRole) => aRole === role)
    );
    isRoleFound = roleResult.length > 0;
  }

  if (currentUserId === "")
    return <Navigate to="/app/login" state={{ from: location.pathname }} />;
  else if (roles && roles.length > 0 && isRoleFound === false)
    return <Navigate to="/" />;
  else return props.children;
}
