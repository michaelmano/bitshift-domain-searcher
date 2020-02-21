export default domain => {
  const index = domain.lastIndexOf('.');
  const tld = domain.substring(index + 1);

  return [domain.split(`.${tld}`)[0], tld];
};
