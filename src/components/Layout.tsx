import { FC } from 'react'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import Home from '../../pages/index'
import Tasks from '../../pages/tasks'

const Layout: FC = ({ children }) => (
  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
    <Link href="/"><Home/></Link>
    <Link href="/tasks"><Tasks/></Link>
  </main>
)

export default Layout;
