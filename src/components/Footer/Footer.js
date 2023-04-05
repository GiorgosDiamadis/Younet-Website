import useSite from 'hooks/use-site';
import {findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT} from "../../lib/menus";
import Image from "next/image";
import logo from "../../../public/YouNet-LogoW.webp"
import location from "../../../public/location.svg"
import phone from "../../../public/phone.svg"
import Burger from "../Nav/Burger";

const Footer = () => {
    const {metadata = {}, menus} = useSite();
    const {title} = metadata;
    const navigationLocation = process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || MENU_LOCATION_NAVIGATION_DEFAULT;

    const navigation = findMenuByLocation(menus, navigationLocation);


    return (
        <footer className={'bg-dark_blue py-5 relative mt-10 hidden'}>
            <div className={''}>
                <div className={'w-[95%] m-auto'}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
                        <div className="  text-white flex gap-3 items-center">
                            <div className={'w-1/2 hidden md:block'}>

                                <Image src={logo} alt="me" width={'90'} height={'51'} loading={'lazy'}/>
                            </div>

                            <p>
                                Είμαστε εδώ για να μετατρέψουμε με επιτυχία τις μεγάλες ιδέες σας σε πραγματικότητα.

                            </p>
                        </div>
                        <div className="  text-white flex gap-3 items-center">
                            <div className={'w-1/2 hidden md:block'}>

                                <Image src={logo} alt="me" width={'90'} height={'51'} loading={'lazy'}/>
                            </div>

                            <p>
                                Κάνε εγγραφή στο Newsletter μας και μάθε πρώτος τις τελευταίες εξελίξεις στον κόσμο του
                                Digital.

                            </p>
                        </div>
                        <div className="  text-white items-center">

                            <div className={'flex gap-2'}>
                                <div className=" hidden md:block">

                                    <Image alt={'text'} src={location} width={24} height={24} loading={"lazy"}/>
                                </div>
                                <p className={'mt-0 mb-0'}>

                                    Αγίου Κωνσταντίνου 13, Πειραιάς
                                    TK 185 32, 8ος Όροφος
                                </p>
                            </div>

                            <div className=" flex gap-2">
                                <div className=" hidden md:block">

                                    <Image alt={'text'} src={phone} width={24} height={24} loading={"lazy"}/>
                                </div>
                                <p className={"mt-0 mb-0"}>

                                    210 300 28 78
                                </p>
                            </div>

                        </div>
                        <div className="  text-white flex gap-3 items-center">
                            <div className={'w-1/2 hidden md:block'}>
                                <Image src={logo} alt="me" width={'90'} height={'51'} loading={'lazy'}/>
                            </div>

                            <p>
                                Follow us

                            </p>
                        </div>
                    </div>

                    <div className={'dropdown flex justify-end cursor-pointer group relative'}>
                        <div className={'relative z-[39] lg:z-0 flex w-[70px] h-[30px] justify-end'}
                             onMouseEnter={() => {
                                 const lines = [...document.querySelectorAll('[data-footer-transition]')]
                                 lines.forEach((line) => {
                                     line.classList.toggle('menu-open')
                                 })
                             }
                             } onClick={() => {
                            const lines = [...document.querySelectorAll('[data-footer-transition]')]
                            lines.forEach((line) => {
                                if (line.classList.contains('menu-open'))
                                    line.classList.remove('menu-open')
                                else
                                    line.classList.add('menu-open')

                            })
                        }}>
                            <Burger data-footer-transition/>
                        </div>
                    </div>


                </div>
            </div>

            <div onMouseLeave={() => {
                const lines = [...document.querySelectorAll('[data-footer-transition]')]
                lines.forEach((line) => {
                    line.classList.toggle('menu-open')
                })
            }} data-footer-transition className="dropdown-menu  bg-dark_blue">
                {navigation?.map((listItem) => (
                    <div key={listItem.label} className={'bg-yn_blue-100 text-white p-2 rounded'}>
                        {listItem.label}
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
