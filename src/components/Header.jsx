import React from 'react'

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
            title: "Our work",
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
    return (
        <div className='px-24 py-5 shadow-md fixed w-full sticky top-0 z-50 bg-white'>
            <nav className=' flex justify-between'>
                <div className=' font-bold text-greenColor text-2xl'>
                    SpicySizzling <span className="text-orangeColor">
                        Catering</span>
                </div>
                <div>

                    <ul className='flex space-x-4'>
                        {
                            navList.map((item) => {
                                return (
                                    <li key={item.id} className=''>
                                        <button>
                                            {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                {item.title}
                                            </a> :
                                                <>
                                                    {item.title}
                                                </>
                                            }
                                        </button>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header