import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Field({
  label,
  htmlFor,
  hint,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  const describedBy = [
    hint ? `${htmlFor}-hint` : null,
    error ? `${htmlFor}-error` : null,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="flex items-baseline justify-between gap-3 text-sm font-medium">
        <span>{label}</span>
        {optional ? (
          <span className="font-normal text-current/45">Facultatif</span>
        ) : null}
      </label>
      <div className={cn(describedBy && "contents")}>
        {children}
      </div>
      {hint ? (
        <p id={`${htmlFor}-hint`} className="text-sm text-current/55">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-sm text-danger">
          {error}
        </p>
      ) : null}
      <span className="sr-only" data-describedby={describedBy} />
    </div>
  );
}

const controlClass =
  "h-12 w-full rounded-md border border-current/15 bg-current/4 px-3.5 text-base text-current outline-none transition-[border-color,background-color] duration-150 placeholder:text-current/35 hover:border-current/25 focus:border-lime/70 focus:bg-current/6";

export function TextInput({
  error,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
  return (
    <input
      className={cn(controlClass, error && "border-danger/60", className)}
      aria-invalid={error ? true : undefined}
      aria-describedby={
        [props.id && error ? `${props.id}-error` : null].filter(Boolean).join(" ") ||
        undefined
      }
      {...props}
    />
  );
}

export function TextArea({
  error,
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }) {
  return (
    <textarea
      className={cn(
        controlClass,
        "h-auto min-h-36 rounded-lg py-3 leading-relaxed",
        error && "border-danger/60",
        className,
      )}
      aria-invalid={error ? true : undefined}
      aria-describedby={
        [props.id && error ? `${props.id}-error` : null].filter(Boolean).join(" ") ||
        undefined
      }
      {...props}
    />
  );
}

export function SelectInput({
  error,
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { error?: string }) {
  return (
    <select
      className={cn(controlClass, error && "border-danger/60", className)}
      aria-invalid={error ? true : undefined}
      {...props}
    >
      {children}
    </select>
  );
}

export function Honeypot({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
      <label htmlFor="fax_number">Fax</label>
      <input
        id="fax_number"
        name="faxNumber"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

