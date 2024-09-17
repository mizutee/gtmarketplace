import { GitHubSignIn } from "../components/GitHubSignIn";
import { LoginForm } from "../components/LoginForm";
import { FacebookSignIn } from "../components/FacebookSignIn";
import { GoogleSignIn } from "../components/GoogleSignIn";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
    if (cookies().get('token')) {
        redirect('/')
    }
    return (
        (<div
            className="flex items-center justify-center h-screen bg-background dark:bg-[#1a1b1e]">
            <div
                className="bg-card dark:bg-[#1f2023] w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-2xl">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Sign in to your account</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Enter your email and password below to access your account.
                    </p>
                </div>
                <div className="space-y-4">
                    <LoginForm />
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">Or sign in with</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex justify-center items-center w-full">
                            <GitHubSignIn className="w-full" />
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <FacebookSignIn className="w-full" />
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <GoogleSignIn className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    );
}
