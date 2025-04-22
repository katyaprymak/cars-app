"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";

const Form = FormProvider;

const FormField = ({
  ...props
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return <Controller {...props} />;
};

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("space-y-2", className)} {...props} />;
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  const { formState } = useFormContext();
  return (
    <label
      ref={ref}
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  return <Slot ref={ref} {...props} />;
});
FormControl.displayName = "FormControl";

const FormMessage = ({
  children,
  className,
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  const { formState } = useFormContext();
  return children ? (
    <p className={cn("text-sm text-red-500", className)}>{children}</p>
  ) : null;
};

export { Form, FormField, FormItem, FormLabel, FormControl, FormMessage };
