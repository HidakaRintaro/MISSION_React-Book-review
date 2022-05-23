import { unwrapResult } from '@reduxjs/toolkit'
import { ChangeEventHandler, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '~/store/auth'
import { useAppDispatch } from '~/store/hook'

interface IFormInput {
  userName: string
  email: string
  password: string
}

export const SignUp: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(false)

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value)
  }
  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value)
  }
  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value)
  }
  const handleSubmitSignUp: SubmitHandler<IFormInput> = async () => {
    try {
      unwrapResult(await dispatch(signUp({ name, email, password })))
      navigate('/')
    } catch {
      setLoginError(true)
    }
  }

  return (
    <div className="mx-auto mt-4 max-w-sm px-6 py-5">
      <h1 className="text-center text-2xl font-bold text-emerald-500">新規登録</h1>
      {loginError && <div className="font-bold text-red-500">新規登録に失敗しました</div>}
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="mt-6" onSubmit={handleSubmit(handleSubmitSignUp)}>
        <label htmlFor="userName" className="block">
          <span className="block text-sm text-gray-700">ユーザ名</span>
          <input
            {...register('userName', { required: true })}
            id="userName"
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            value={name}
            onChange={handleChangeName}
          />
          {errors.userName?.type === 'required' && (
            <span className="text-xs text-red-500">ユーザネームがありません</span>
          )}
        </label>
        <label htmlFor="email" className="mt-6 block">
          <span className="block text-sm text-gray-700">メールアドレス</span>
          <input
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            id="email"
            type="email"
            placeholder="you@example.com"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            value={email}
            onChange={handleChangeEmail}
          />
          {errors.email?.type === 'pattern' && (
            <span className="text-xs text-red-500">メールアドレスの形式が正しくありません</span>
          )}
        </label>
        <label htmlFor="password" className="mt-6 block">
          <span className="block text-sm text-gray-700">パスワード</span>
          <input
            {...register('password', { required: true })}
            id="password"
            type="password"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            value={password}
            onChange={handleChangePassword}
          />
          {errors.password?.type === 'required' ? (
            <span className="text-xs text-red-500">パスワードを入力してください</span>
          ) : (
            <span className="text-xs text-gray-400">８文字以上で入力してください</span>
          )}
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
