import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <main className="bg-dark-back h-120 flex flex-col items-center justify-center gap-6 text-4xl p-4 text-two">
            <h1>B.C. Trees CRM</h1>
            <Button asChild className="bg-one w-40 text-xl p-5">
                <LoginLink>Login</LoginLink>
            </Button>
        </main>
    )
}