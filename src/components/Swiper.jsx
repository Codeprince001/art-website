import { Background_1, Background_2, Background_3 } from '../assets';


export default () => {

  return (
    <div className='mx-auto p-8 md:flex md:gap-5 md:items-center md:justify-center flex items-center relative  flex-1 w-full'>
      <div className='' ><img src={Background_3} /></div>
      <div ><img src={Background_2} /></div>
      <div><img src={Background_1} /></div>
    </div>
  );
};