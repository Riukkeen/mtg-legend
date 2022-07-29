import React, { ReactElement } from 'react'

interface IconProps {
  className: string
  svg: ReactElement
}

const Icon = ({ className, svg }: IconProps) => {
  return <div className={className}>{svg}</div>
}

export default Icon
