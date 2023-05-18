import Link from "next/link";

export default function Sidebar() {
    return (
        <aside>
            <div>
                <Link href={"../signup"}>Sign In</Link>
            </div>
            <div>
                <Link href={"../signin"}>Sign In</Link>
            </div>
        </aside>
    )
}