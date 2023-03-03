import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Error from '../components/error'
import LoadingAnimation from '../components/LoadingAnimation'
import { registerUser } from '../features/authAction'

function Register() {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm()

  useEffect(() => {
    if (userInfo) navigate('/dashboard')
    if (success) navigate('/')
  }, [navigate, userInfo, success])

  const submitForm = (data) => {
    dispatch(registerUser(data))
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className='d-flex flex-column justify-content-center mt-5'>

            <h3 className="text-center mb-5">Register</h3>
            {error && <Error>{error}</Error>}
            <label htmlFor="nama_user">Your Name : </label>
            <input
              className='form-control'
              label='Nama'
              type='text'
              size="lg"
              {...register('nama_user')}
            />

            <label htmlFor="email">Email : </label>
            <input
              className='form-control'
              label='Email'
              type='email'
              size="lg"
              {...register('email')}
            />

            <label htmlFor="nama_user">Username : </label>
            <input
              className='form-control'
              label='Username'
              type='text'
              size="lg"
              {...register('username')} />

            <label htmlFor="nama_user">Password : </label>
            <input
              className='form-control'
              label='Password'
              type='password'
              size="lg"
              {...register('password')}
            />
            <br />
            <button
              type='button'
              className="btn btn-primary"
              disabled={loading}
              onClick={handleSubmit(submitForm)}
            > {loading ? <LoadingAnimation /> : 'Register'}</button>

            <p className='text-center'>You have an account? <Link to="/" className="link" style={{ color: '#1D4ED8' }}>Login here</Link></p>

          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  )
}

export default Register