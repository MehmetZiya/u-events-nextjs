import styles from '../styles/Login.module.css'

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.brandlogo}></div>
        <div className={styles.brandtitle}>TWITTER</div>
        <div className={styles.inputs}>
          <label className={styles.label}>EMAIL</label>
          <input
            className={styles.input}
            type='email'
            placeholder='example@test.com'
          />
          <label className={styles.label}>PASSWORD</label>
          <input
            className={styles.input}
            type='password'
            placeholder='Min 6 charaters long'
          />
          <button className={styles.button} type='submit'>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
