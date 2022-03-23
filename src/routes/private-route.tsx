import { Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        <Component {...props} />
      }
    />
  );
}