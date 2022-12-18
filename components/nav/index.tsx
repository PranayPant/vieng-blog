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
      <div>
        <span>DIS LLC</span>
      </div>
      <ul className="flex gap-3">
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
    </nav>
  )
}
