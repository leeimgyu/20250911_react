import type {DetailedHTMLProps, FC, HTMLAttributes} from 'react'
import {makeClassName} from './textUtil'

// prettier-ignore
type TextProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement>

export type TitleProps = TextProps & {numberOfLines?: number}

// prettier-ignore
export const Title: FC<TitleProps> = ({
  className: _className, numberOfLines, ...props
}) => {
  const className = makeClassName(
    'font-bold text-5xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export type SubtitleProps = TitleProps & {}

// prettier-ignore
export const Subtitle: FC<SubtitleProps> = ({
  className: _className, numberOfLines, ...props
}) => {
  const className = makeClassName(
    'font-semibold text-3xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export type SummaryProps = SubtitleProps & {}

// prettier-ignore
export const Summary: FC<SummaryProps> = ({
  className: _className, numberOfLines, ...props
}) => {
  const className = makeClassName(
    'text-sm whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export type ParagraphProps = SummaryProps & {}

// prettier-ignore
export const Paragraph: FC<ParagraphProps> = ({
  className: _className, numberOfLines, ...props
}) => {
  const className = makeClassName(
    'font-normal, text-base whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}
