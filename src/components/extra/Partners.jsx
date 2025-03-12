import { useState, useEffect } from 'react';
import amazon from "../../assets/partners/amazon-logo.svg";
import walmart from "../../assets/partners/walmart-logo.svg";
import target from "../../assets/partners/target-logo.svg";
import costco from "../../assets/partners/costco-logo.svg";
import homeDepot from "../../assets/partners/home-depot-logo.svg";

export default function Partners() {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalLogos = 5;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % totalLogos);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2 className="text-center text-3xl text-white font-bold mb-12">Trusted by businesses worldwide</h2>
            <div className="flex flex-wrap justify-center items-center gap-20">
                <img 
                    src={amazon} 
                    alt="Partner Logo 1" 
                    className={`h-16 w-auto transition-all duration-500 ${activeIndex === 0 ? '' : 'grayscale'}`} 
                />
                <img 
                    src={walmart} 
                    alt="Partner Logo 2" 
                    className={`h-20 w-auto transition-all duration-500 ${activeIndex === 1 ? '' : 'grayscale'}`} 
                />
                <img 
                    src={target} 
                    alt="Partner Logo 3" 
                    className={`h-20 w-auto transition-all duration-500 ${activeIndex === 2 ? '' : 'grayscale'}`} 
                />
                <img 
                    src={costco} 
                    alt="Partner Logo 4" 
                    className={`h-16 w-auto transition-all duration-500 ${activeIndex === 3 ? '' : 'grayscale'}`} 
                />
                <img 
                    src={homeDepot} 
                    alt="Partner Logo 5" 
                    className={`h-16 w-auto transition-all duration-500 ${activeIndex === 4 ? '' : 'grayscale'}`} 
                />
            </div>
        </div>
    )
}