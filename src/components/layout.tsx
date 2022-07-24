import Header from "./header"
import Footer from "./footer"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
