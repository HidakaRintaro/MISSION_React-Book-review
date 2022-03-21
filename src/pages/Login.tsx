export const Login: React.FC = () => {
  console.log('login')
  return (
    <div className="max-w-sm mt-4 mx-auto px-6 py-5">
      <h1 className="text-emerald-500 text-center font-bold text-2xl">ログイン</h1>
      <form className="mt-6">
        <label htmlFor="email" className="block mt-6">
          <span className="block text-sm text-gray-700">メールアドレス</span>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-emerald-500 focus:ring-1"
          />
        </label>
        <label htmlFor="password" className="block mt-6">
          <span className="block text-sm text-gray-700">パスワード</span>
          <input
            id="password"
            type="password"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-emerald-500 focus:ring-1"
          />
        </label>
        <div className="mt-6 text-right">
          <button
            type="submit"
            className="bg-emerald-500 w-full hover:bg-emerald-700 px-5 py-2 text-sm rounded-md text-white"
          >
            ログイン
          </button>
        </div>
      </form>
    </div>
  )
}
