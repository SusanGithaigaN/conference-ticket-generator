import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="bg-img h-screen">
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
      </div>
    </>
  )
}
