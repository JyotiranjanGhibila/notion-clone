import React from 'react'
import { Logo } from './Logo'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <div className='dark:bg-[#1F1F1F] flex items-center w-full p-6 bg-background z-50'>
      <Logo/>
      <div className='md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground'>
         <Button variant="ghost" size="sm">Privacy Policy</Button>
         <Button variant="ghost" size="sm">Term & Conditions</Button>

      </div>
    </div>
  )
}

export default Footer