import { Link, Outlet } from "@remix-run/react"
import type { ReactNode } from "react"

const App = () => (
  <Document>
  <Layout>
    <Outlet />
  </Layout>
</Document>
)

export default App

interface Props {
  children: ReactNode
  title?: string
}

const Document = (props: Props) => {
  const { children, title } = props
  return <html>
    <head>
      <title>{title ?? "Remixer Smoother"}</title>
    </head>
    {children}
  </html>
}

function Layout({ children } : { children: ReactNode }) {
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='logo'>
          Remix
        </Link>

        <ul className='nav'>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>

      <div className='container'>{children}</div>
    </>
  )
}
