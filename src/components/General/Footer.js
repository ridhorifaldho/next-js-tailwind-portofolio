import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-slate-500 mt-5 py-5">
            <div className="container mx-auto flex px-5">
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

                <div className="ml-auto">Made with ❤️ by RO & RR. &copy; 2023/03/03</div>
            </div>
        </footer>
    )
}
