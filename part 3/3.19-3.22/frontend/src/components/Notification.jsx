const Notification = ({message, type = 'success'}) => {
  if (message === null) {
    return null
  }
  
  const notificationStyle = {
    color: type === 'error' ? 'red' : 'green',
    background: 'lightgrey',
  }

  return (
    <div className={type} style={notificationStyle} role={type === 'error' ? 'alert' : 'status'}>
      {message}
    </div>
  )
}

export default Notification