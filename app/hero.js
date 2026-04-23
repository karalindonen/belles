import Image from "next/image";
import './globals.css';

export default function Hero(){
    return(
    <div>
        <main>
            <Image 
                src="/public/images/BellesLogo.png"
                alt="Belles logo"
                width={100}
                height={30}
            />
        </main>
    </div>
    );
}