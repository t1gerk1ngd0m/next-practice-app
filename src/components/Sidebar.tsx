import { FC } from 'react'
import Link from 'next/link'

export const Sidebar: FC = (props: any) => {
  return (
    <div　className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 -translate-x-full ease-in">
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center">
          <span className="text-white text-2xl mx-2 font-semibold">Dashboard</span>
        </div>
      </div>
      <nav className="mt-10">
        <Link href="/">
          <a className="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100">
            <span className="mx-3">Home</span>
          </a>
        </Link>
        <Link href="/tasks">
          <a className="flex items-center mt-4 py-2 px-6 bg-opacity-25 text-gray-100">
            <span className="mx-3">Tasks</span>
          </a>
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar
