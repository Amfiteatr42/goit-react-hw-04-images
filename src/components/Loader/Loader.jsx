import { ThreeCircles } from 'react-loader-spinner';
import s from '../../styles.module.css';

export function Loader() {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#0e0e73"
      wrapperStyle={{}}
      wrapperClass={s.spinner}
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor="#2a7488"
      middleCircleColor="#4c8dbe"
    />
  );
}
