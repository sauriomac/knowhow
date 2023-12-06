import logoRebel from './logo.png'
import Image from 'next/image';


const Page: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-custom-linear">
  <div>
    <Image src={logoRebel} alt="Logo" className="centered-logo mt-36" />
    <h1 className="text-yellow-400 pt-44 text-center item-center text-lg md:text-3xl">
      Development | Data | Cybersecurity 
    </h1>
  </div>
  <a className="h-50 pt-44 pb-0 text-center items-center text-white" href="#">
    © 2023 Rebel Tech Solutions. All rights reserved.
  </a>
</main>
  );
};

export default Page;