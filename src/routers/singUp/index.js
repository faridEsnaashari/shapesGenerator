import { Switch, Route, useRouteMatch } from "react-router-dom";

import routes from "../../routes/signUp";

const SignUpRouter = () => {
    const match = useRouteMatch();
    const url = match.url;

    const getRoutes = () => {
        return routes.map((route, index) => {
            return(
                <Route key={ index } path={ `${ url }${ route.path }` }>
                    <route.component/>
                </Route>
            );
        });
    };

    return (
        <Switch>
            { getRoutes() }
        </Switch>
    );
}

export default SignUpRouter;
