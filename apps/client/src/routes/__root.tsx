import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NavBar from '../components/global/NavBar'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        {/* <Link to="/" className="[&.active]:font-bold">
          Home
        </Link> */}
        <NavBar />
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
