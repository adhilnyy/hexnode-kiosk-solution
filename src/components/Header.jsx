import {useState, useEffect} from 'react'
import Sidebar from './Sidebar';
import FreeTrailBtn from './FreeTrailBtn';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header role="banner" className={`fixed group flex justify-center items-center w-full h-[69px] z-50 bg-blue hover:bg-white transition-colors duration-300 ${scrolled ? 'bg-white border border-white-tab' : 'bg-blue'}`}>
        <div className='container grid grid-cols-12'>
          <a className='col-span-5 my-auto' rel="noopener noreferrer" href="https://www.hexnode.com/" target='_blank'>
            <svg role="img" aria-hidden="true" version="1.1" className={` ${scrolled ? "fill-blue" : "fill-white" } group-hover:fill-blue w-[121px]`} x="0px" y="0px" viewBox="0 0 120.9 25"> <g id="hex__logo_Layer_1"> </g> <g id="hex__logo_art_2"> <g id="hex__logo"> <g> <path className="hex__logo_st0" d="M8.3,8.7C7.9,8.6,6.9,8.5,5.8,8.8c-0.4,0.1-1.2,0.3-2,0.7l0-7.3c0-1.1-0.9-1.9-1.9-1.9S0,1.2,0,2.2L0,23                    c0,1.1,0.9,1.9,1.9,1.9C3,24.9,3.8,24,3.8,23l0-7.5v0c0.2-0.7,0.4-1.2,0.8-1.7c0.2-0.3,0.9-1,2-1.1c1.6-0.2,2.7,0.7,2.9,0.9                    c1.2,1.1,1.2,2.5,1.2,2.7l0,7.1c0,0.9,0.8,1.7,1.8,1.7h0c1,0,1.8-0.8,1.8-1.7l0-7.5c0-1.5-0.5-2.6-0.8-3.1                    C12.6,10.5,10.5,9,8.3,8.7z"></path> <path className="hex__logo_st0" d="M78.2,8.5c-0.3,0-0.8-0.1-1.3,0c-2.8,0.2-4.8,2-5.2,2.4c-2.3,2.3-2.4,5.2-2.4,5.7c0,0.9,0.1,3.3,1.9,5.4                    c1.3,1.5,3.3,2.5,5.7,2.7c0.3,0,0.6,0.1,1.1,0.1l0,0c0,0,0,0,0,0v0c3.4-0.1,5.7-2.6,5.8-2.7c0.3-0.3,1.9-2.4,1.9-5.4                    C85.8,12.4,82.5,8.8,78.2,8.5z M81.7,16.8c-0.1,2.3-2.1,4.1-4.4,4c-2.3-0.1-4.2-2-4.1-4.3c0.1-2.3,2.1-4.1,4.4-4                    C80,12.5,81.8,14.5,81.7,16.8z"></path> <path className="hex__logo_st0" d="M59.8,8.7c-1.5,0-2.9,0.4-4.1,1.2c-0.3-0.8-1-1.3-1.9-1.3c-1.1,0-2,0.9-2,2l0,12.2c0,1.1,0.9,2,2,2                    c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.9,0,1.7-0.7,1.7-1.7l0-6.9c0-0.1,0.1-0.3,0.2-0.6c0-0.1,0.2-0.7,0.3-1                    c0.4-0.9,1.1-1.4,1.3-1.5c0.8-0.5,1.5-0.6,1.7-0.6c0.6,0,1,0.1,1.3,0.1c0.2,0.1,1,0.3,1.6,0.9c1,1,1.2,2.3,1.2,2.6                    c0,2.3,0,4.6,0,6.9c0,0.2,0.1,0.7,0.6,1.1c0.6,0.5,1.2,0.5,1.3,0.5h0c0.9,0,1.7-0.7,1.7-1.7l0-7.3c-0.1-0.8-0.3-2.1-1.1-3.4                    C65.8,12,63.7,8.8,59.8,8.7z"></path> <path className="hex__logo_st0" d="M118.2,10.3c-1.9-1.5-4.1-1.6-4.4-1.6c-0.3,0-1.4,0-2.8,0.4c-1.7,0.6-2.8,1.5-3.1,1.8                    c-2.4,2.2-2.5,5.2-2.6,5.7c0,0.7-0.1,3.2,1.7,5.5c1.9,2.3,4.4,2.7,5.1,2.8c1.1,0.2,2.2,0.1,2.5,0c0.5-0.1,1.3-0.2,2.4-0.6                    c1.4-0.6,2.3-1.4,2.9-2.1c0.3-0.8,0.3-1.6-0.2-2.1c-0.4-0.4-0.9-0.6-1-0.6c-0.9-0.2-1.7,0.3-1.8,0.4c-0.2,0.2-0.5,0.5-0.9,0.7                    c-0.8,0.5-1.6,0.5-2.1,0.5c-0.4,0-1.8,0.1-3-0.9c-1.1-0.8-1.5-1.8-1.7-2.2l11.7,0C121.3,15,120.3,12,118.2,10.3z M110.8,13.4                    c1.1-0.7,2.1-0.8,2.6-0.8c0.4,0,1.4,0,2.4,0.7c0.6,0.4,0.9,0.9,1.2,1.3l-7.3,0C109.9,14.2,110.3,13.8,110.8,13.4z"></path> <path className="hex__logo_st0" d="M38.2,16.1c1-1,1.9-2,2.9-3c-1.2-1.2-2.4-2.4-3.7-3.6c-0.8-0.8-2.1-0.8-2.9,0c-0.8,0.8-0.8,2.1,0,2.9                    C35.7,13.6,36.9,14.8,38.2,16.1z"></path> <path className="hex__logo_st0" d="M49.1,9.1c-0.8-0.8-2.1-0.7-2.8,0.1L34.5,21.5c-0.8,0.8-0.7,2.1,0.1,2.8c0.8,0.8,2.1,0.7,2.8-0.1l4.3-4.5                    l4.4,4.4c0.8,0.8,2.1,0.8,2.9,0c0.8-0.8,0.8-2.1,0-2.9l-4.4-4.5l4.6-4.8C50,11.1,49.9,9.9,49.1,9.1z"></path> <path className="hex__logo_st0" d="M101.7,0c-1.1,0-2,0.9-2,2l0,8c-1.1-0.8-2.5-1.3-3.9-1.4v0c-0.3,0-0.8-0.1-1.3,0c-2.8,0.2-4.7,2-5.1,2.4                    C87,13.2,87,16.1,87,16.6c0,0.9,0.1,3.3,1.9,5.4c1.3,1.5,3.2,2.5,5.6,2.7c0.3,0,0.6,0.1,1.1,0.1l0,0c0,0,0,0,0,0l0,0                    c1.8-0.1,3.2-0.8,4.2-1.5c0.2,0.8,1,1.4,1.9,1.4c1.1,0,2-0.9,2-2l0-20.8C103.6,0.9,102.7,0,101.7,0z M99.4,16.8                    c-0.1,2.4-2.1,4.3-4.5,4.2c-2.4-0.1-4.2-2.1-4.1-4.5c0.1-2.4,2.1-4.3,4.5-4.2C97.7,12.4,99.5,14.4,99.4,16.8z"></path> <path className="hex__logo_st0" d="M29.3,10.4c-1.9-1.5-4.1-1.6-4.4-1.6c-0.3,0-1.4,0-2.8,0.4c-1.7,0.6-2.8,1.5-3.1,1.8                    c-2.4,2.2-2.5,5.2-2.6,5.7c0,0.7-0.1,3.2,1.7,5.5c1.9,2.3,4.4,2.7,5.1,2.8c1.1,0.2,2.2,0.1,2.5,0c0.5-0.1,1.3-0.2,2.4-0.6                    c1.4-0.6,2.3-1.4,2.9-2.1c0.3-0.8,0.3-1.6-0.2-2.1c-0.4-0.4-0.9-0.6-1-0.6c-0.9-0.2-1.7,0.3-1.8,0.4c-0.2,0.2-0.5,0.5-0.9,0.7                    c-0.8,0.5-1.6,0.5-2.1,0.5c-0.4,0-1.8,0.1-3-0.9c-1.1-0.8-1.5-1.8-1.7-2.2l11.7,0C32.4,15,31.4,12.1,29.3,10.4z M21.9,13.5                    c1.1-0.7,2.1-0.8,2.6-0.8c0.4,0,1.4,0,2.4,0.7c0.6,0.4,0.9,0.9,1.2,1.3l-7.3,0C21,14.3,21.4,13.8,21.9,13.5z"></path> </g> </g> </g> </svg>
          </a>
          <div className='col-span-7 text-end flex items-center justify-end'>
            <FreeTrailBtn lg={true} />
            <div className={`ml-2 ${scrolled ? "text-blue" : "text-white" } block lg:hidden group-hover:text-blue`}  onClick={toggleSidebar}><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                aria-label="Menu"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>

            {/* Sidebar Component */}
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

          </div>
        </div>
    </header>
  )
}

export default Header