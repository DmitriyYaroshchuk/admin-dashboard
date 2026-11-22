import Navbar from '../components/dashboard/navbar/navbar'
import Sidebar from '../components/dashboard/sidebar/sidebar'

function Layout({ children }) {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  )
}
export default Layout
