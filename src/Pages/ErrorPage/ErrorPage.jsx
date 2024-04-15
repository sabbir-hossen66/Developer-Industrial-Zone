import { Link } from 'react-router-dom';
import errorPhoto from '../../assets/images/error.jpg'

const ErrorPage = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <img className='mx-auto' src={errorPhoto} alt="" />
      <Link to={'/'}> <button className='btn  text-2xl font-semibold bg-blue-600 text-white rounded-2xl '>Go to home page</button></Link>
    </div>
  );
};

export default ErrorPage;