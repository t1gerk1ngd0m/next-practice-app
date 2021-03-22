import { FC } from 'react'

const Layout: FC = ({ children }) => (
  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
    {children}
  </main>
)

export default Layout;
