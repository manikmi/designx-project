import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(
  ({ className, variant = "default", type = "button", ...props }, ref) => (
    <button
      type={type}
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "outline" && "border bg-transparent",
        className
      )}
      {...props}
    />
  )
)
Button.displayName = "Button"

export { Button }
