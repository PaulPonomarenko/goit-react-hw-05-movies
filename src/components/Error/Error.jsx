import PropTypes from 'prop-types';

const ErrorMasage = ({ error }) => {
  return (
    <>
      <h2>{error}</h2>
    </>
  );
};

export default ErrorMasage;

ErrorMasage.propTypes = {
  error: PropTypes.string,
};
