import { Link } from 'react-router-dom'

export const Login: React.FC = () => {
  console.log('login')
  return (
    <div className="mx-auto mt-4 max-w-sm px-6 py-5">
      <h1 className="text-center text-2xl font-bold text-emerald-500">ログイン</h1>
      <form className="mt-6">
        <label htmlFor="email" className="mt-6 block">
          <span className="block text-sm text-gray-700">メールアドレス</span>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </label>
        <label htmlFor="password" className="mt-6 block">
          <span className="block text-sm text-gray-700">パスワード</span>
          <input
            id="password"
            type="password"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </label>
        <div className="mt-6 text-right">
          <button
            type="submit"
            className="w-full rounded-md bg-emerald-500 px-5 py-2 text-sm text-white hover:bg-emerald-700"
          >
            ログイン
          </button>
        </div>
        <div className="mt-4 text-center text-sm">
          <Link to="/signup" className="text-emerald-500 hover:underline">
            新規登録へ
          </Link>
        </div>
      </form>
    </div>
  )
}
