const Button = ({ color, text, onClick }: any) => {
  return (
    <div>
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{ text }</button>        
    </div>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button