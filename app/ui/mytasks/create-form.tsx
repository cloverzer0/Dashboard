import Link from 'next/link';
import { CheckIcon, ClockIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';

export default function Form() {
  return (
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Task Title */}
        <div className="mb-4">
          <label htmlFor="task-title" className="mb-2 block text-sm font-medium">
            Task Title
          </label>
          <input
            id="task-title"
            name="taskTitle"
            type="text"
            placeholder="Enter task title"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            required
          />
        </div>

        {/* Priority */}
        <div className="mb-4">
          <label htmlFor="priority" className="mb-2 block text-sm font-medium">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select priority
            </option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            <option value="ai">AI</option>
          </select>
        </div>
        {/* */}
        {/* Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">Status</legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="complete"
                  name="status"
                  type="radio"
                  value="complete"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="complete"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Complete <CheckIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="in-progress"
                  name="status"
                  type="radio"
                  value="in-progress"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="in-progress"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-yellow-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  In Progress <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="incomplete"
                  name="status"
                  type="radio"
                  value="incomplete"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="incomplete"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Incomplete <XCircleIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>

      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/tasks"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Task</Button>
      </div>
    </form>
  );
}
