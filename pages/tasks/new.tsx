import { FC } from 'react'

const NewTask: FC = (props: any) => (
  <div className="container mx-auto px-6 py-8">
    <h3 className="text-gray-700 text-3xl font-medium">Task作成</h3>
    <div className="mt-4">
      <div className="mt-4">
        <div className="p-6 bg-white rounded-md shadow-md">
          <h2 className="text-lg text-gray-700 font-semibold capitalize">Account settings</h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="text-gray-700">Username</label>
                <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text"/>
              </div>

              <div>
                <label className="text-gray-700">Email Address</label>
                <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="email"/>
              </div>

              <div>
                <label className="text-gray-700">Password</label>
                <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="password"/>
              </div>

              <div>
                <label className="text-gray-700">Password Confirmation</label>
                <input className="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="password"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default NewTask
