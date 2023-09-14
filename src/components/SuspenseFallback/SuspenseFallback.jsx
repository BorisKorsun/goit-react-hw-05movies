import PropTypes from 'prop-types'

export default function SuspenseFallback({ children }) {
  return <p>{children}</p>;
}

SuspenseFallback.propTypes = {
  children: PropTypes.string,
}