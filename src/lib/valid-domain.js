export default domain => {
  return /^(?=.{0,253}$)(([a-z0-9_][a-z0-9_-]{0,61}[a-z0-9_]|[a-z0-9_])\.)+((?=.*[^0-9])([a-z0-9][a-z0-9-]{0,61}[a-z0-9]|[a-z0-9]))$/i.test(
    domain
  );
};
