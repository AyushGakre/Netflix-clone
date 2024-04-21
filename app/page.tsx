"use client"
import Image from "next/image";
import { useCallback, useState } from "react";
import Input from "@/app/components/Input";
import logo from "@/app/images/logo.png";
import { useRouter } from "next/navigation";

const auth = () =>{
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [variant, setVariant] = useState('login');
const router = useRouter();
const toogle = useCallback(()=>{
setVariant((currentvalue) => currentvalue === 'login' ? 'register':'login')
},[])
    return(
        <div className=" relative h-full w-full bg-[url('images/hero.jpg')] bg-center bg-cover bg-no-repeat">
            <div className=" bg-black w-full h-full lg:bg-opacity-60 ">
                <nav className="px-12 py-5">
                    <Image src={logo} alt="logo" className=" h-12 w-36"></Image>
                </nav>
                <div className=" text-white flex justify-center">
                    <div className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
                            <h1 className=" font-semibold text-3xl mb-8">{variant === 'login'? "Sign In":"Sign Up"}</h1>
                            <div className="flex flex-col gap-4 space-y-3">
              {variant === 'register' && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)} 
                />
              )}
              <Input
                id="email"
                type="email"
                label="Email address"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)} 
              />
              <Input
                type="password" 
                id="password" 
                label="Password" 
                value={password}
                onChange={(e: any) => setPassword(e.target.value)} 
              />
              <button
              onClick={() => 
              router.push('/home')
            }
              className=" bg-red-600 p-2 rounded-md hover:bg-red-500 transition-color"
              >{variant === 'login' ? "login": "Sign Up"}</button>
              <p>{variant ==='login'? "New to Netflix ?":"Already Have ?"}<span onClick={toogle} className="text-zinc-400 cursor-pointer"> Create new account</span></p>
            </div>
                    </div>
                </div>
            </div>
        </div>
     
    )
}

export default auth
