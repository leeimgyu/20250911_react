import type {DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren} from 'react'
import type {WidthHeight} from './WidthHeight'
import type {LeftRightTopBottom} from './LeftRightTopBottom'

// prettier-ignore
export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> & {src?: string} & LeftRightTopBottom

export const Div: FC<DivProps> = ({
  width,height,src,className: _className,style: _style,
  left,right,top,bottom,...props
}) => {
  const style = {
    ..._style,width,height,backgroundImage: src && `url(${src})`,
    left,right,top,bottom
  }
  const className = ['box-border', src && 'bg-gray-300', _className].join(' ')
  return <div {...props} className={className} style={style} />
}