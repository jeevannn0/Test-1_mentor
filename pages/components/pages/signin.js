import Link from "next/link";
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase'; 
import { toast } from "react-toastify";
import { Label } from "../../../public/ui/label";
import { Input } from "../../../public/ui/input";
import { Button } from "../../../public/ui/button";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in Successfully", { position: "top-center" });
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link href="/" className="inline-flex items-center ml-[200px] mb-[547px]" prefetch={false}>
            <img src="/The-Mentor-logo.png" alt="Logo" /> 
      </Link>
      <div className="w-full md:w-1/2 bg-card p-8 space-y-6 flex items-center justify-center">
        <div className="space-y-2 text-left">
          <div className="flex items-center justify-between">
          </div>
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/components/pages/signup" className="text-primary underline" prefetch={false}>
              Create one
            </Link>
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <div className="flex gap-4">
              <Button variant="outline">Sign in with Google</Button>
              <Button variant="outline">Sign in with LinkedIn</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-muted flex items-center justify-center">
        <img src="/placeholder.svg" width={600} height={600} alt="Sign in" className="max-w-full h-auto" />
      </div>
    </div>
  );
}
