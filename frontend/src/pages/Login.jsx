import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../features/authAction'
import { useEffect } from 'react'
import Error from '../components/error'
import LoadingAnimation from "../components/LoadingAnimation";

function Login() {
  const { loading, userInfo, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className='d-flex flex-column justify-content-center mt-5'>
            <h3 className="text-center mb-5">Login</h3>

            {error && <Error>{error}</Error>}
            <label htmlFor="username">Username :</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              {...register('username')}
            />

            <label htmlFor="password">Password :</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              {...register('password')}
            />
            <br />
            <button
              type="button"
              className="btn btn-primary"
              disabled={loading}
              onClick={handleSubmit(submitForm)}
            >{loading ? <LoadingAnimation /> : 'Login'}</button>

            <p className='ms-5 text-center'>Don't have an account? <Link to="/register" className="link" style={{ color: '#1D4ED8' }}>Register here</Link></p>

          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  )
}

export default Login