import { signIn } from "@/auth"

export function GoogleSignIn() {
    return (
        <div>
            <form className="w-full" action={async () => {
                'use server'
                await signIn('google')
            }}>
                <button className="border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground px-12 py-2 rounded-md"
                >
                    <ChromeIcon className="h-5 w-5" />
                </button>
            </form>
        </div>
    )
}

function ChromeIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>)
    );
}
