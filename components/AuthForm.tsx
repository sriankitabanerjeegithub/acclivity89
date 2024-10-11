'use client';
import React , {useState}from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomInput from './CustomInput';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authformSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import SignUp from '@/app/(auth)/sign-up/page';
import SignIn from '@/app/(auth)/sign-in/page';
import { useRouter } from 'next/navigation';
// import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions';
import { getLoggedInUser,signIn,signUp } from '@/lib/actions/user.actions';
import PlaidLink from './PlaidLink';


// const formSchema = z.object({
//   email: z.string().email(),
// })


const AuthForm = ({ type }: {type:string}) => {
  const router =  useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    //const loggedInUser=await getLoggedInUser();
  const formSchema = authformSchema(type);

    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ''
    
    },
  })
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      // Sign up with Appwrite & create plaid token
      
      if(type === 'sign-up') {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email,
          password: data.password
        }

        const newUser = await signUp(userData);

        setUser(newUser);
      }
 
  

        if(type === 'sign-in'){
          const response = await signIn({
            email: data.email,
            password: data.password,
          })
           if(response) router.push('/')
        }
    }catch(error){
      console.log(error);
    }
    finally{
      setIsLoading(false);
    }
    
  }

  return (
    <section className="auth-form">
      <header className='flex flex-col gap-5 md:gap-8'>
      <Link href="/" className=" cursor-pointer flex items-center gap-1">
        <Image src="data:image/png;base64,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"
         width={40} 
         height={40} 
         alt="Acclivity logo"
         />
        <h1 className="text-26 font-ibm-plex-serif
        font-bold text-black-1" style={{fontSize:'28px'}}>
          Acclivity
        </h1>
         </Link>
         <div className="flex flex-col gap-1 md:gap-3">
             <h1 className="text-24 lg:text-36 
             font-semibold text-gray-900">
                {user
                ?'Link Account' : type === 'sign-in'
                                            ?'Sign In'
                                             : 'Sign Up' 
                                             }
                <p className="text-16 font-normal text-gray-600">
                    {user 
                    ? 'Link your account to get started'
                     :'please enter your details'
                    }
                </p>
             </h1>
         </div>
      </header>
      
      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary"/>
        </div>
         ): (
        <>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {type == 'sign-up' && (
            <>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='firstName' label="First Name" placeholder='Enter your first name' />
                    <CustomInput control={form.control} name='lastName' label="Last Name" placeholder='Enter your first name' />
                  </div>
                  <CustomInput control={form.control} name='address1' label="Address" placeholder='Enter your specific address' />
                  <CustomInput control={form.control} name='city' label="City" placeholder='Enter your city' />
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='state' label="State" placeholder='Example: NY' />
                    <CustomInput control={form.control} name='postalCode' label="Postal Code" placeholder='Example: 11101' />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='dateOfBirth' label="Date of Birth" placeholder='YYYY-MM-DD' />
                    <CustomInput control={form.control} name='ssn' label="SSN" placeholder='Example: 1234' />
                  </div>
            </>
              )}

        
        <CustomInput
        control={form.control} name='email' label="Email" placeholder="enter your email" />
           
           <CustomInput
        control={form.control} name='password' label="Password" placeholder="enter your password" />
           

        <div className="flex flex-col gap-4">    
           <Button type="submit" disabled={isLoading}  className="form-btn">{
           isLoading ? (
            <>
            <Loader2 size={20} className="animate-spin"/> &nbsp;
            Loading...
            </>
          ) :type === 'sign-in' 
          ? 'Sign In' : 'Sign Up'}
          </Button>
        </div>

      </form>
    </Form>
    <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">{type === 'sign-in'
            ? "Don't have an account?" 
            : "Already have an account?"}
        </p>
        <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
        {type === 'sign-in' ? 'Sign up' : 'Sign in'}
        </Link>
        </footer>
        </>
     )} 
    </section >
  )
}

export default AuthForm