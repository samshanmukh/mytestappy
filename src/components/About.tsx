import { Link } from 'react-router-dom'
import { FaArrowLeft, FaTimes } from 'react-icons/fa'

const About = () => {
  return (
    <div>
        <h3>About Us:</h3>
        <p>Version 1.0.0</p>
        <Link className='btn' to='/'>
            <FaArrowLeft  />
            &nbsp; Back
        </Link>
    </div>
  )
}

export default About