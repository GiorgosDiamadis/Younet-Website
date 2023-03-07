// import ClassName from 'models/classname';
// import styles from './NavListItem.module.scss';
import Link from 'next/link';

const NavListItem = ({className, item}) => {
    const nestedItems = (item.children || []).map((item) => {
        return <NavListItem key={item.id} item={item}/>;
    });


    return (
        <li key={item.id} className={'nav-menu-item'}>
            {!item.path.includes('http') && !item.target && (
                <>
                    <Link legacyBehavior legacyBehavior href={item.path}>
                        <a style={{padding: "0"}} className={'nav-menu-link md:text-2xl lg:text-4xl text-2xl text-white'} title={item.title}>
                            <span>{item.label}</span>


                        </a>
                    </Link>
                    {item.label === 'Υπηρεσίες' && (

                        <div className={'grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-2  mb-2 w-full mb-5 m-auto place-items-center'}>
                            <Link legacyBehavior href={item.path}>
                                <a style={{padding: "0"}} className={'nav-menu-link  text-lg md:text-xl lg:text-2xl sub-link text-highlighted m-0'}
                                   title={item.title}>
                                    <span>Κατασκευή Website</span>
                                </a>
                            </Link>
                            <Link legacyBehavior href={item.path}>
                                <a style={{padding: "0"}} className={'nav-menu-link text-lg md:text-xl lg:text-2xl sub-link text-highlighted m-0'}
                                   title={item.title}>
                                    <span>E-Commerce Solutions</span>
                                </a>
                            </Link>
                            <Link legacyBehavior href={item.path}>
                                <a style={{padding: "0"}} className={'nav-menu-link text-lg md:text-xl lg:text-2xl sub-link text-highlighted m-0'}
                                   title={item.title}>
                                    <span>Digital Marketing</span>
                                </a>
                            </Link>
                            <Link legacyBehavior href={item.path}>
                                <a style={{padding: "0"}} className={'nav-menu-link text-lg md:text-xl lg:text-2xl sub-link text-highlighted m-0'}
                                   title={item.title}>
                                    <span>SEO</span>
                                </a>
                            </Link>
                            <Link legacyBehavior href={item.path}>
                                <a style={{padding: "0"}} className={'nav-menu-link text-lg md:text-xl lg:text-2xl sub-link text-highlighted m-0'}
                                   title={item.title}>
                                    <span>Web Hosting</span>
                                </a>
                            </Link>
                            <Link  legacyBehavior href={item.path}>
                                <a style={{padding: "0"}} className={'nav-menu-link text-lg md:text-xl lg:text-2xl sub-link text-highlighted m-0'}
                                   title={item.title}>
                                    <span>Σχεδιασμός λογοτύπου</span>
                                </a>
                            </Link>
                        </div>
                    )}
                </>


            )}
            {item.path.includes('http') && (
                <a style={{padding: "0"}} href={item.path} className={'nav-menu-link md:text-2xl lg:text-4xl text-2xl text-white'} title={item.title}
                   target={item.target}>
                    <span>{item.label}</span>
                </a>


            )}

            {nestedItems.length > 0 && <ul className={className}>{nestedItems}</ul>}
        </li>
    );
};

export default NavListItem;
