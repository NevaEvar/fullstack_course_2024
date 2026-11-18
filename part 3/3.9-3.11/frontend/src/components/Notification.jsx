const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  
  const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
  }

  return (
    <div className="error" style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification