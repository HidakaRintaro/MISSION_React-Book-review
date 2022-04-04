import { ChangeEventHandler } from 'react'
import { Link } from 'react-router-dom'
import { setEmail, setName, setPassword } from '~/store/auth'
import { useAppDispatch, useAppSelector } from '~/store/hook'

export const SignUp: React.FC = () => {
  const dispatch = useAppDispatch()
  const auth = useAppSelector((state) => state.auth)
  const { name, email, password } = auth

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setName(event.target.value))
  }
  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setEmail(event.target.value))
  }
  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setPassword(event.target.value))
  }
  const handleSubmitSignUp = () => {
    console.log({ name, email, password })
  }

  return (
    <div className="mx-auto mt-4 max-w-sm px-6 py-5">
      <h1 className="text-center text-2xl font-bold text-emerald-500">新規登録</h1>
      <form className="mt-6" onSubmit={handleSubmitSignUp}>
        <label htmlFor="userName" className="block">
          <span className="block text-sm text-gray-700">ユーザ名</span>
          <input
            id="userName"
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label htmlFor="email" className="mt-6 block">
          <span className="block text-sm text-gray-700">メールアドレス</span>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label htmlFor="password" className="mt-6 block">
          <span className="block text-sm text-gray-700">パスワード</span>
          <input
            id="password"
            type="password"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <div className="mt-6 text-right">
          <button
            type="submit"
            className="w-full rounded-md bg-emerald-500 px-5 py-2 text-sm text-white hover:bg-emerald-700"
          >
            新規登録
          </button>
        </div>
        <div className="mt-4 text-center text-sm">
          <Link to="/login" className="text-emerald-500 hover:underline">
            ログインへ
          </Link>
        </div>
      </form>
    </div>
  )
}
