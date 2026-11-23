import classes from '@/app/components/login/login.module.css';

function LoginPage() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          aria-label="Username"
          autoComplete="username"
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          aria-label="Password"
          autoComplete="current-password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginPage;
