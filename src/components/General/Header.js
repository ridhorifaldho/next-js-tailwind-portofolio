import React from "react";
import Link from "next/link"

export default function Header() {
    return (
        <header className="border-b border-slate-500 py-5 mb-5">
            <div className="container mx-auto flex justify-between px-5">
                <div className="logo"> Ridho Rifaldho.</div>
                <ul className="flex gap-5">
                    <li>
                        <Link legacyBehavior href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/">
                            <a>About Me</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/">
                            <a>Work</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/">
                            <a>Hobby</a>
                        </Link>
                    </li>
                </ul>
                    <div>
                        <Link legacyBehavior href="/contact">
                            <a className="border border-slate-400 p-2 px-5">Contact</a>
                        </Link>
                    </div>
            </div>
        </header>
    )
}
