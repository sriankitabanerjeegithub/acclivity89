'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { SheetClose } from '@/components/ui/sheet'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname= usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
  <SheetTrigger>
    <Image 
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAACYmJhkZGQ/Pz/6+vqpqani4uJ4eHjKysrc3NwzMzMaGhqkpKRCQkJ1dXWenp5WVlawsLDAwMBqamqLi4vp6el/f3+5ublTU1PU1NTx8fGXl5crKyvNzc1LS0sSEhIgICAvLy+Pj49df48DAAAChUlEQVR4nO3c3ZKiMBCGYaICjqKDCOLvurPe/z2uO84uNAQO1qSdSr3PaaoIXyEBK01HEQAAAAAAAAAAAAAAAAAAAAAAAAAAL7SoliYrt/bBH/OLUbGsFr4CVl9TXNP+WDzVifdQ+QlY/psg2/UCzjQDGvPuI+CqNcG6O/iuG9CYxH3A+Gd7gs69mGoHNFnsPOGbmKCUg7l6QvPmPKEMcZGD5cBpeJQ7TzgRx8/k4EY/4cR5wkQcv7PU1PoJ3S81cjE5y8FCP6Hlmfws8Us8yTG50Go4uA8YLVrH793me+2EXl7cmueF5aVJ+Xkx8G78rPTwOPzemv9DL9/V26t3tNsXxXFo8JhMNOSFh0UGAAAAAAAAAADgu4m31XSenOyDp6KeaigrT1trd9uvnV5rzdVqfEPMqcxTxibDoV+uM1cMeLfyEbBdMtQrK9O8gp/cFwxF0bI9QWcT9qQd0MzcBzyKCWo5mAych0fuN7rl73ApB5Xvwj/c34lncfzXV32d7af5hNFrqF5e6uMajt6H6kupMYMlIf9vbC3dqQf85T5gtG0dv/c8PA+eiide3mqaClPLO41qqb6PdebT3/K82lZjfdMMWPgJeP9vsa83Zd77FOFhl09nGtZl4b6KHQAAAAAAAAAA4NtJizwZrGQJ4Hv8xXpkbyuEngrNJrCl01YIfTHavU1u3cEgepsc2hN0dklj7YA++tPIHkOdixhEjyFZutYpnAuiT1T4vb7C79cme+51nhdB9NyLP0aOH0TfRLHUXLuDIfS+bJfJXnofJATRv7Qpz9tYvrjQ7UHbe6dyJb1ds+V84B5X7CNMsy8AAAAAAAAAAAAAAAAAAAAAAAAAwEv9BrghJ311jEU1AAAAAElFTkSuQmCC"
    width={30}
    height={30}
    alt="menu"
    className="curser-pointer"
    />
  </SheetTrigger>
  <SheetContent side="left" 
  className="border-none bg-white">
  <Link href="/" className=" cursor-pointer flex items-center gap-1">
        <Image src="data:image/png;base64,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"
         width={40} 
         height={40} 
         alt="Acclivity logo"
         />
        <h1 className="text-26 font-ibm-plex-serif
        font-bold text-black-1" style={{fontSize:'18px'}}>
          Acclivity
        </h1>
         </Link>
         <div className="mobilenav-sheet">
           <SheetClose asChild>
            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
            {sidebarLinks.map((item)=>{
          const isActive=
          pathname=== item.route || pathname.startsWith(`${item.route}/`)
        return (
          <SheetClose asChild key={item.route} >
<Link href={item.route} key={item.label}
          className={cn('mobilenav-sheet_close w-full',{
            'bg-bank-gradient':isActive})}
          >
            
              <Image 
              src={item.imgURL} 
              alt={item.label}
              width={20}
              height={20}
              className={cn({
                'brightness-[3] invert-0': isActive
              })}
              />
            
            <p className={cn("text-16 font-semibold text-black-2", { "text-white": isActive })}>
                {item.label}
              </p>
          </Link>
          </SheetClose>
        )
          })}
            </nav>
           </SheetClose>
         </div>
        
  </SheetContent>
</Sheet>
    </section>
  )
}

export default MobileNav
