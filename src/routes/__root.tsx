import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <div className="flex gap-2 p-2">
      <Link className="[&.active]:font-bold" to="/">
        Home
      </Link>{" "}
      <Link className="[&.active]:font-bold" to="/about">
        About
      </Link>
    </div>
    <hr />
    <Outlet />
    {import.meta.env.MODE === "development" && (
      <>
        <TanStackRouterDevtools position="bottom-right" />
      </>
    )}
  </>
);

export const Route = createRootRoute({ component: RootLayout });
