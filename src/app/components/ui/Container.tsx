import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
}

export const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('w-full max-w-[90rem] mx-auto px-5', className)} {...props}>
      {children}
    </div>
  );
};
