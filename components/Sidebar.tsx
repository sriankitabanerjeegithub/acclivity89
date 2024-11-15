
'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from './ui/Footer'
import  PlaidLink from './PlaidLink'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image 
            src="data:image/png;base64,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"
            width={34}
            height={34}
            alt="Acclivity"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Acclivity</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link href={item.route} key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
        <PlaidLink user={user}/>
        
      
      </nav>

     <Footer user={user} /> 
    </section>
  )
}

export default Sidebar