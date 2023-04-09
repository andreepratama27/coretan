export default function Account() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="w-20 mb-4 border-b-2 border-red-500 title-login">
        <h1 className="text-white">Login with</h1>
      </div>

      <form action="#" className="mt-8">
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="pb-2 text-gray-400">
            Email
          </label>
          <input
            name="email"
            className="px-4 py-2 text-gray-400 bg-gray-900 border-none rounded outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="pb-2 text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="px-4 py-2 text-gray-400 bg-gray-900 border-none rounded outline-none"
          />
        </div>
      </form>
    </div>
  );
}
