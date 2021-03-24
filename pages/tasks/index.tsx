import { FC } from 'react'

const Tasks: FC = (props: any) => (
  <div className="container mx-auto px-6 py-8">
    <h3 className="text-gray-700 text-3xl font-medium">Tasks</h3>
    <div className="mt-4">
      <div className="p-6 bg-white rounded-md shadow-md">
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="text-gray-700">タスク名</label>
              <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text"/>
            </div>
            <div>
              <label className="text-gray-700">メモ</label>
              <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="email"/>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Save</button>
          </div>
        </form>
      </div>
      <div className="mt-6">
        <div className="bg-white shadow rounded-md overflow-hidden my-6">
          <table className="text-left w-full border-collapse">
            <thead className="border-b">
              <tr>
                <th className="py-3 px-5 bg-indigo-800 font-medium uppercase text-sm text-gray-100">City</th>
                <th className="py-3 px-5 bg-indigo-800 font-medium uppercase text-sm text-gray-100">Total orders</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-200">
                <td className="py-4 px-6 border-b text-gray-700 text-lg">New York</td>
                <td className="py-4 px-6 border-b text-gray-500">200,120</td>
              </tr>
              <tr className="hover:bg-gray-200">
                <td className="py-4 px-6 border-b text-gray-700 text-lg">Manchester</td>
                <td className="py-4 px-6 border-b text-gray-500">632,310</td>
              </tr>
              <tr className="hover:bg-gray-200">
                <td className="py-4 px-6 border-b text-gray-700 text-lg">London</td>
                <td className="py-4 px-6 border-b text-gray-500">451,110</td>
              </tr>
              <tr className="hover:bg-gray-200">
                <td className="py-4 px-6 border-b text-gray-700 text-lg">Madrid</td>
                <td className="py-4 px-6 border-b text-gray-500">132,524</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)

export default Tasks
