import type {CSSProperties, FC} from 'react'

export type IconProps1 = {name: string; style?: CSSProperties}

export const Icon1: FC<IconProps1> = (props: IconProps1) => {
  const { name, style } = props;
  return <span className="material-symbols-outlined" style={style}>{name}</span>;
}