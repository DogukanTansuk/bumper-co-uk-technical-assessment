import React from 'react'
import SVG from 'react-inlinesvg'

import {toAbsoluteUrl} from '../../utils'

type SvgProps = {
  className?: string
  path: string
  svgClassName?: string
  onClick?: any
}

const Svg: React.FC<SvgProps> = ({className = '', path, svgClassName = 'mh-50px', onClick}) => {
  return (
    <span
      onClick={onClick}
      className={`svg-icon ${className}`}
      style={onClick ? {cursor: 'pointer'} : {}}>
      <SVG src={toAbsoluteUrl(path)} className={svgClassName} />
    </span>
  )
}

export {Svg}
