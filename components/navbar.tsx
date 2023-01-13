import Link from "next/link";

export const Navbar=()=>{

    return(
        <div className="border-8 grid place-items-center">
            <nav className="grid place-items-center">

                <ul className="text-3xl font-bold underline">
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contacts">Contacts</Link>
                    </li>
                </ul>

            </nav>
        </div>
    )
};