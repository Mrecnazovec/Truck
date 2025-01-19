import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface FluidProps extends HTMLAttributes<HTMLDivElement> {
}

export const Fluid: React.FC<FluidProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('w-full max-w-[1232px] mx-auto px-5', className)} {...props}>
      {children}
    </div>
  );
};
