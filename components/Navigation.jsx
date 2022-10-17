import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Navigation() {
    const { data: session } = useSession()
    const [open, setOpen] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    
    return (
        <>
            <div className="flex gap-2 justify-between items-center p-2 bg-black text-white shadow-md px-6 xl:sticky xl:top-0 z-50">
                <div className="flex gap-6">
                    <Link href="/" passHref>
                        <span className="p-2 font-bold cursor-pointer">E-Learning</span>
                    </Link>

                    {/* <Link href="/ELearning" passHref>
                        <span className="p-2 font-bold cursor-pointer hidden md:flex">E-Learning</span>
                    </Link> */}
                </div>

                <div className="hidden md:flex">
                    <button type="button" onClick={(prevState) => setOpenLogin(prevState => !prevState)} className="p-2 font-bold cursor-pointer">{session ? "Account" : "Login"}</button>
                </div>

                {openLogin &&
                    <div className="absolute right-8 top-10 py-4 px-2 bg-white rounded-md shadow-xl">
                        {session ? 
                            <div className="text-center">
                                <p className="text-black p-1">{session.user.email}</p>
                                <button onClick={() => signOut()}>
                                    <p className="text-black font-bold flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 p-1 rounded-md">Sign out</p>
                                </button>
                            </div>
                            :
                            <>
                                <button onClick={() => signIn()}>
                                    <p className="text-black font-bold flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 p-1 rounded-md"><Image src="/googleIcon.png" height={30} width={30}></Image> Login with Google</p>
                                </button>
                            </>
                        }
                    </div>
                }
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