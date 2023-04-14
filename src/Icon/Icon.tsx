import { forwardRef } from 'react'
import iconSet from './icons.json'

export type IconType = keyof typeof iconSet

// types
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: IconType | string | number
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <span ref={ref} {...props} className="material-symbols-outlined">
      {props.icon}
    </span>
  )
})
