'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { useState } from "react";
import axios from "axios";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from "next/navigation";

export function LoginForm() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleLogin = async () => {
        setError(null)
        try {
            const { data } = await axios({
                method: "POST",
                url: "http://localhost:5000/login",
                data: {
                    form: {
                        email,
                        password
                    }
                },
            })
            setCookie('token', data.token)
            const cookies = getCookie('token')
            if (cookies) {
                router.push("/")
            }
        } catch (error) {
            if (error?.name === 'AxiosError') {
                setError(<Alert variant="destructive">
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        {error.response.data.error + " Please re-check your credentials."}
                    </AlertDescription>
                </Alert>)
            }
        }
    }

    return (
        <div className="space-y-4">
            {error ? error : ""}
            <div>
                <Label htmlFor="email" className="text-muted-foreground dark:text-[#b3b3b3]">
                    Email
                </Label>
                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-input dark:bg-[#2c2d31] text-card-foreground dark:text-[#f1f1f1] border-none focus:ring-0 focus:border-none" />
            </div>
            <div>
                <Label htmlFor="password" className="text-muted-foreground dark:text-[#b3b3b3]">
                    Password
                </Label>
                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="bg-input dark:bg-[#2c2d31] text-card-foreground dark:text-[#f1f1f1] border-none focus:ring-0 focus:border-none" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Checkbox id="remember-me" />
                    <Label htmlFor="remember-me" className="ml-2 mt-0.5 block text-sm text-gray-900 dark:text-gray-300">
                        Remember me
                    </Label>
                </div>
                <div className="text-sm">
                    <Link
                        href="/register"
                        className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
                        prefetch={false}
                    >
                        Forgot your password?
                    </Link>
                </div>
            </div>
            <div className="space-y-2">
                <Button
                    className="w-full bg-primary dark:bg-[#0077b6] text-primary-foreground dark:text-[#f1f1f1] hover:bg-primary/90 dark:hover:bg-[#005a8d] transition-colors"
                    onClick={async () => await handleLogin()}
                >
                    Login
                </Button>
            </div>
            <div className="text-sm flex flex-row gap-1">
                <p className="text-black">Don't have an account?</p>
                <Link
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
                    prefetch={false}
                >
                    Register here!
                </Link>
            </div>
        </div>
    )
}