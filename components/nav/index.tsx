import { twMerge } from 'tailwind-merge'

export interface NavProps {
  className?: string
}
export default function Nav({ className }: NavProps) {
  return (
    <nav
      className={twMerge(
        'h-[10vh] flex justify-between md:absolute w-full',
        className
      )}
    >
      <span className="self-center">DIS LLC</span>
      <ul className="hidden md:flex gap-3">
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#accomplishments">Accomplishments</a>
        </li>
      </ul>
      <div id="hamburger-menu" className="block md:hidden self-center">
        <div className="w-6 flex flex-col gap-1">
          <div className="h-0.5 bg-slate-500 rounded"></div>
          <div className="h-0.5 bg-slate-500 rounded"></div>
          <div className="h-0.5 bg-slate-500 rounded"></div>
        </div>
      </div>
    </nav>
  )
}
