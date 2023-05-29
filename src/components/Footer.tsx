import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2023</p>
        {/* <a href="/about">About</a> */}
        <Link className='btn btn-block' to="/about">About Page</Link>
    </footer>
  )
}

export default Footer