import { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import { format } from 'date-fns'

const FETCH_TASKS = gql`
  query {
    tasks {
      id
      name
      content
      created_at
      updated_at
    }
  }`;

const Tasks: FC = (props: any) => {

const Tasks: FC = (props: any) => {
  const { loading, error, data } = useQuery(FETCH_TASKS);

  return (
    <div className="container px-6 py-8 mx-auto">
      <h3 className="text-3xl font-medium text-gray-700">Tasks</h3>
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
          <div className="my-6 overflow-hidden bg-white rounded-md shadow">
            <table className="w-full text-left border-collapse">
              <thead className="border-b">
                <tr>
                  <th className="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800">タスク名</th>
                  <th className="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800">内容</th>
                  <th className="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800">作成日時</th>
                  <th className="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800">更新日時</th>
                </tr>
              </thead>
              <tbody>
                {data && data.tasks.map(task => {
                  return (
                    <tr className="hover:bg-gray-200" key={task.id}>
                      <td className="px-6 py-4 text-lg text-gray-700 border-b">{task.name}</td>
                      <td className="px-6 py-4 text-gray-500 border-b">{task.content}</td>
                      <td className="px-6 py-4 text-gray-500 border-b">{format(new Date(task.created_at), 'yyyy/MM/dd')}</td>
                      <td className="px-6 py-4 text-gray-500 border-b">{format(new Date(task.updated_at), 'yyyy/MM/dd')}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks
