import type { TextareaHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = ({ className, ...props }: TextareaProps) => (
  <textarea
    className={cn(
      'min-h-[120px] w-full rounded-md border border-crz-outline/80 bg-crz-surface px-4 py-3 text-sm text-crz-text shadow-sm transition-[border-color,box-shadow] duration-fast ease-standard placeholder:text-crz-mutedText focus:border-crz-primary focus:outline-none focus:ring-2 focus:ring-crz-primary/20',
      className,
    )}
    {...props}
  />
)

export default Textarea
