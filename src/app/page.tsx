import logoRebel from './logo.png'
import Image from 'next/image';


const Page: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-24 w-full bg-custom-linear">
  <div className="w-full text-center pt-32">
    <Image src={logoRebel} alt="Logo" className="mx-auto mt-8 md:mt-36 w-3/4 md:w-auto" />
    <h1 className="text-yellow-400 pt-36 md:pt-44 text-base md:text-3xl w-full">
      Development | Data | Cybersecurity 
    </h1>
  </div>
  <a className="w-full pt-12 pb-12 md:pt-44  text-center text-white" href="#">
    © 2023 Rebel Tech Solutions. All rights reserved.
  </a>
</main>
  );
};

export default Page;