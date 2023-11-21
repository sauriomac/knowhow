import logoRebel from './logo.png'
import Image from 'next/image';


const Page: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <Image src={logoRebel} alt="Logo" className="centered-logo" />
        <h2 className="text-yellow-400 pt-44 text-center item-center">
        Development | CiberSeguridad | Data 
        </h2>
      </div>
      <a className="h-50 pt-44 pb-0 text-center items-center" href="#">
        © 2023 Rebel Tech Solutions. All rights reserved.
      </a>
    </main>
  );
};

export default Page;