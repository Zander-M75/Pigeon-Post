import amazon from "../../assets/partners/amazon-logo.svg";
import walmart from "../../assets/partners/walmart-logo.svg";
import target from "../../assets/partners/target-logo.svg";
import costco from "../../assets/partners/costco-logo.svg";
import homeDepot from "../../assets/partners/home-depot-logo.svg";


export default function Partners() {
    return (
        <div>
            <h2 className="text-center text-3xl text-white font-bold mb-12">Trusted by businesses worldwide</h2>
            <div className="flex flex-wrap justify-center items-center gap-20">
                <img src={amazon} alt="Partner Logo 1" className="h-16 w-auto grayscale hover:grayscale-0 transition-all" />
                <img src={walmart} alt="Partner Logo 2" className="h-20 w-auto grayscale hover:grayscale-0 transition-all" />
                <img src={target} alt="Partner Logo 3" className="h-16 w-auto grayscale hover:grayscale-0 transition-all" />
                <img src={costco} alt="Partner Logo 4" className="h-16 w-auto grayscale hover:grayscale-0 transition-all" />
                <img src={homeDepot} alt="Partner Logo 5" className="h-16 w-auto grayscale hover:grayscale-0 transition-all" />
            </div>
        </div>
    )
}