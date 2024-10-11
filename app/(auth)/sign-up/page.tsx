// import AuthForm from '@/components/AuthForm'
// import { getLoggedInUser } from '@/lib/actions/user.actions'
// import React from 'react'

// const SignUp = async(userData: { firstName: string; lastName: string; address1: string; city: string; state: string; postalCode: string; dateOfBirth: string; ssn: string; email: string; password: string; }) => {
//   const loggedInUser=await getLoggedInUser();
//   console.log(loggedInUser)
//   return (
//     <section
//       className="flex-center size-full max-sm:px-6">
//         <AuthForm type="sign-up"/>
//     </section>
//   )
// }

// export default SignUp
import AuthForm from '@/components/AuthForm'

const SignUp = async () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  )
}

export default SignUp
