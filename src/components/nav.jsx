import { useState } from 'react';
import { Trans } from 'react-i18next';
import { IoClose } from 'react-icons/io5'

function Nav({ handleCloseNav , currentItem }) {

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



    const renderNavLink = (content) => {
        const titles = content.title.replace(/\s+/g, '').toLowerCase();
        const scrollToId = `${titles}Section`;
        const handleClickNav = () => {
            document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
        }
        const handleClick = (index, e) => {
            function isIT(nav) {
                return nav.id === index;
            };
            const element = navList.find(isIT);
            handleCloseNav(element.title.toLocaleLowerCase());
          
        };

        return (
            <li key={content.id} onClick={(e) => handleClick(content.id, e)} className=' w-full text-center ' >
                {content.link ? <a href={content.link} target="_blank" rel="noopener noreferrer">
                    {content.title}
                </a> :
                    <button onClick={handleClickNav} className={currentItem === content.title.toLowerCase() ? 'text-greenColor font-semibold bg-white p-auto w-full p-4' : ""}  >
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
        <nav className=' lg:flex  h-screen bg-gray-900/90  fixed z-50 w-full transition-all duration-1000' >
            <div className='flex justify-end'>
                <IoClose
                    className='text-5xl  my-5 relative top-2 mx-5'
                    onClick={handleCloseNav}
                />
            </div>
            <ul className='flex flex-col space-y-10 text-3xl text-white justify-center items-center space-x-4'>
                {
                    navList.map((item) => renderNavLink(item))
                }
            </ul>
        </nav>
    )
}

export default Nav