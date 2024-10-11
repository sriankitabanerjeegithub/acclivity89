// import AuthForm from '@/components/AuthForm'
// import React from 'react'

// const SignIn = (p0: { email: string; password: string }) => {
//   return (
//     <section
//       className="flex-center size-full max-sm:px-6">
//         <AuthForm type="sign-in"/>
//     </section>
//   )
// }

// export default SignIn
import AuthForm from '@/components/AuthForm'

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  )
}

export default SignIn
