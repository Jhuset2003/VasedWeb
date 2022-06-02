import PropTypes from "prop-types"

function Input({ input, backgroundColor = "red", size = "md", border= "3px solid purple", handleClick }) {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border,
  }
  return (
    <input onClick={handleClick} style={style}
      {...input}
    />
  )
}

Input.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
}

export default Input