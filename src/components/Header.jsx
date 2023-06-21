import { useState, useContext } from 'react';
import { NavContext } from '../context/NavContext';
import { Trans } from 'react-i18next';
import {IoMenu}  from 'react-icons/io5'
function Header({handleOpenNav}) {
    const { activeLinkId } = useContext(NavContext);
    const navList = [
        {
            id: 1,
            title: "Home",
            link: null
        },
        {
            id: 2,
            title: "About",
            link: null
        },
        {
            id: 3,
            title: "Our Work",
            link: null
        },
        {
            id: 4,
            title: "Recipe",
            link: "https://spicysizzling.github.io/blog/"
        },
        {
            id: 5,
            title: "Contact",
            link: null
        },
    ]

    const [currentItem, setItem] = useState("home")

    const handleClickLogo = () => {
        document.getElementById("homeSection").scrollIntoView({ behavior: "smooth" })
        setItem("home")
    }

    const renderNavLink = (content) => {
        const titles = content.title.replace(/\s+/g, '').toLowerCase();
        const scrollToId = `${titles}Section`;
        const handleClickNav = () => {
            document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
        }
        const handleClick = (index, e) => {
            function isIT(nav) {
                return nav.id === index;
            }
            const element = navList.find(isIT)
            setItem(element.title.toLocaleLowerCase())
        };

        return (
            <li key={content.id} onClick={(e) => handleClick(content.id, e)}  >
                {content.link ? <a href={content.link} target="_blank" rel="noopener noreferrer">
                    {content.title}
                </a> :
                    <button onClick={handleClickNav} className={activeLinkId === titles ? 'text-greenColor font-semibold' : ""}  >
                        <Trans i18nKey={`description.navTitle${content.id}`}>
                            {content.title}
                        </Trans>
                    </button>
                }
            </li>
        )
    }


    // useEffect({},[props.isScroll]
    return (
        <div className={currentItem !== "home" || activeLinkId !== "home" ? 'lg:px-24 px-6 py-5  shadow-md fixed w-full sticky top-0 z-30 bg-white' : 'lg:px-24   px-6 py-5  lg:shadow-none  shadow-md fixed w-full sticky top-0 z-30 lg:bg-whites'}>
            <div className=' flex justify-between'>
                <div className=' font-bold text-greenColor lg:text-2xl text-xl' onClick={handleClickLogo}>
                    SpicySizzling <span className="text-orangeColor">
                        Catering</span>
                </div>
                <div className='lg:hidden  border p-2 shadow-md' onClick={handleOpenNav}>
                    <IoMenu className='text-xl'/>
                </div>

                <nav  className='hidden lg:flex '>
                    <ul className='flex space-x-4'>
                        {
                            navList.map((item) => renderNavLink(item))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header