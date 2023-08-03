import * as React from 'react';
import Drawer from "./Drawer";
import { HamburgerMenuIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';

function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => () => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //   return;
        // }

        setIsOpen((prevState) => !prevState);
    };

    const list = () => (
        <main>
            test
        </main>
    );

    return (
        <>
            <header className="static bg-[#121212] text-white duration-300 ease-in-out delay-0 transition-[box-shadow]
                    shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2),0_4px_5px_0_rgba(0,0,0,0.14),0_1px_10px_0_rgba(0,0,0,0.12)]
                    flex flex-col w-full box-border">
                <div className="relative flex webkit-box-align items-center min-h-[64px] pl-[24px] pr-[24px]">
                    <button
                        type="button"
                        className="inline-flex webkit-box-align items-center webkit-box-pack justify-center relative
                        box-border webkit-tap-highlight-color bg-transparent cursor-pointer select-none align-middle
                        webkit-appearance no-underline text-center flex-[0_0_auto] rounded-[50%] overflow-visible
                        duration-150 ease-in-out delay-0 transition-[background-color] ml-[-12px] p-[12px] text-[1.75rem]
                        mr-[16px]"
                        onClick={() => setIsOpen(true)}
                    >
                        <HamburgerMenuIcon className="w-[0.8em] h-[0.8em]"/>
                    </button>
                    <div className="m-0 font-medium text-xl tracking-[.0075em] webkit-box-flex grow max-[767px]:hidden">
                        웹메모 프로젝트
                    </div>
                    <div className="relative rounded-[4px] bg-[rgba(255,255,255,0.15)] mr-[16px] md:ml-[24px] md:w-auto max-[767px]:w-full hover:bg-gray-hover">
                        <div className="py-0 px-4 h-full absolute pointer-events-none flex items-center justify-center">
                            <MagnifyingGlassIcon className="w-[1.5em] h-[1.5em]" />
                        </div>
                        <div className="font-normal text-[1rem] leading-[1.4375em] tracking-[.00938em] box-border relative
                             cursor-text inline-flex webkit-box-align items-center text-inherit w-full">
                            <input className="w-[20ch] p-[8px_8px_8px_0] pl-[calc(1em+32px)]
                                   duration-300 ease-in-out delay-0 transition-[width] tracking-[inherit] text-current
                                   border-0 box-content h-[1.4375em] m-0 webkit-tap-highlight-color block min-w-0
                                   bg-transparent outline-none w-full" placeholder="Search..."/>
                        </div>
                    </div>
                </div>


            </header>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                {list()}
            </Drawer>
        </>
    )
}

export default NavBar;