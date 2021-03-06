import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const signupFormData = new FormData()
    signupFormData.append('photo', formData.photo)
    signupFormData.append('name', formData.name)
    signupFormData.append('email', formData.email)
    signupFormData.append('password', formData.password)
    signupFormData.append('passwordConf', formData.passwordConf)

    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }


  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="name"
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          placeholder='email'
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>Password:</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          placeholder='password'
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="confirm" className={styles.label}>
          Confirm Password:
        </label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          placeholder='confirm password'
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      {/* <div className={styles.inputContainer}>
        <label htmlFor="photo-upload" className="form-label">
          Upload Photo
        </label>
        <input
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
        />
      </div> */}
      <div className={styles.inputContainer}>
        <button disabled={isFormInvalid()} className={`${styles.button} ${styles.btn}`}>
          Sign Up
        </button>
        <Link to="/">
          <button className={styles.btn}>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default SignupForm
