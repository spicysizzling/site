import { useState } from 'react';
function Header() {
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
        const scrollToId = `${content.title.replace(/\s+/g, '').toLowerCase()}Section`;

        const handleClickNav = () => {
            document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
        }

        const handleClick = (index, e) => {
            console.log(index);

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
                    <button onClick={handleClickNav} className={currentItem === content.title.toLowerCase() ? 'text-greenColor font-semibold' : ""}  >
                        {content.title}
                    </button>
                }
            </li>
        )
    }


    // useEffect({},[props.isScroll]
    return (
        <div className={currentItem !== "home" ? 'px-24 py-5  shadow-md fixed w-full sticky top-0 z-50 bg-white' : 'px-24 py-5  fixed w-full sticky top-0 z-50'}>
            <div className=' flex justify-between'>
                <div className=' font-bold text-greenColor text-2xl' onClick={handleClickLogo}>
                    SpicySizzling <span className="text-orangeColor">
                        Catering</span>
                </div>
                <nav>
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