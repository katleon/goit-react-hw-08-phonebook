import { Circles } from 'react-loader-spinner';

function Loader() {
  return (
    <Circles
      height="100"
      width="100"
      color="#e60576"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}

export default Loader;
