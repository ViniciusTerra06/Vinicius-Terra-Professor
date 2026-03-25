import { cn } from "@/lib/utils";

interface ToolBadgeProps {
  name: string;
  className?: string;
}

const ToolBadge = ({ name, className }: ToolBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary",
        className
      )}
    >
      {name}
    </span>
  );
};

export default ToolBadge;
