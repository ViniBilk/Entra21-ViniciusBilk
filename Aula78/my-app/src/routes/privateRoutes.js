import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function PrivateRoute({component: Component}) {
    const { accessToken } = useAuth()

    return (
        <Route
        {...rest}
        render={() => accessToken}
        />
    )
}