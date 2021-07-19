import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div className='page page1'>
      <img src='img/cabin.jpg' alt='cabin in the woords' />
      <p>
        So there's a cabin in the woods. Isn't there always, in{' '}
        <Link to='/page2'>stories</Link> like this?
      </p>
    </div>
  );
};

export default Page1;
