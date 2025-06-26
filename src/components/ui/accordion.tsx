"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { MdKeyboardArrowDown } from "react-icons/md";

interface AccordionContextType {
  openItems: string[];
  onToggle: (value: string) => void;
  type: "single" | "multiple";
  collapsible: boolean;
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(
  undefined
);

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  collapsible?: boolean;
  children: React.ReactNode;
}

type AccordionChild = React.ReactElement<{
  accordionValue?: string;
  isOpen?: boolean;
}>;

export function Accordion({
  type = "single",
  collapsible = false,
  children,
  className,
  ...props
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const handleToggle = (value: string) => {
    if (type === "single") {
      setOpenItems((prev) =>
        prev[0] === value ? (collapsible ? [] : prev) : [value]
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <AccordionContext.Provider
      value={{ openItems, onToggle: handleToggle, type, collapsible }}
    >
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

export function AccordionItem({
  value,
  children,
  className,
  ...props
}: AccordionItemProps) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionItem must be used within Accordion");
  const isOpen = ctx.openItems.includes(value);
  return (
    <div
      className={cn("border-b", className)}
      {...props}
      data-state={isOpen ? "open" : "closed"}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as AccordionChild, {
              accordionValue: value,
              isOpen,
            })
          : child
      )}
    </div>
  );
}

interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  accordionValue?: string;
  isOpen?: boolean;
  children: React.ReactNode;
}

export function AccordionTrigger({
  accordionValue,
  isOpen,
  children,
  className,
  ...props
}: AccordionTriggerProps) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionTrigger must be used within Accordion");
  return (
    <button
      type="button"
      className={cn(
        "w-full text-left py-2 font-medium focus:outline-none flex justify-between items-center",
        className
      )}
      aria-expanded={isOpen}
      onClick={() => accordionValue && ctx.onToggle(accordionValue)}
      {...props}
    >
      {children}
      <span
        className={cn(
          "ml-2 transition-transform duration-300 ease-in-out",
          isOpen ? "rotate-180" : "rotate-0"
        )}
      >
        <MdKeyboardArrowDown className="w-5 h-5" />
      </span>
    </button>
  );
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  accordionValue?: string;
  isOpen?: boolean;
  children: React.ReactNode;
}

export function AccordionContent({
  isOpen,
  children,
  className,
  ...props
}: AccordionContentProps) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out py-2",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        className
      )}
      aria-hidden={!isOpen}
      {...props}
    >
      {children}
    </div>
  );
}
