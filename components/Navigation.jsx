import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <div className="flex gap-2 justify-between items-center p-2 bg-black text-white shadow-md px-6">
                <div className="flex gap-6">
                    <Link href="/" passHref>
                        <span className="p-2 font-bold cursor-pointer">Home</span>
                    </Link>

                    <Link href="/ELearning" passHref>
                        <span className="p-2 font-bold cursor-pointer hidden md:flex">E-Learning</span>
                    </Link>
                </div>


                <div className="hidden md:flex">
                    <Link href="/About" passHref>
                        <span className="p-2 font-bold cursor-pointer">About</span>
                    </Link>
                </div>
                {!open &&
                    <div className="flex md:hidden">
                        <button type="button" onClick={handleOpen} className="p-2 font-bold cursor-pointer">Menu</button>
                    </div>
                }
                {open &&
                    <div className="flex md:hidden">
                        <button type="button" onClick={handleClose} className="p-2 font-bold cursor-pointer">X</button>
                    </div>
                }
            </div>
            {open &&
                <div className="md:hidden p-4 flex flex-col gap-2 items-center bg-black text-white">
                    <Link href="/ELearning" passHref>
                        <p className="p-2 font-bold cursor-pointer">E-Learning</p>
                    </Link>
                    <Link href="/About" passHref>
                        <p className="p-2 font-bold cursor-pointer">About us</p>
                    </Link>
                    <Link href="/Reviews" passHref>
                        <p className="p-2 font-bold cursor-pointer">Make a review</p>
                    </Link>
                </div>}
        </>
    )
}