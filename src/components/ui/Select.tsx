"use client";

import { useState, useRef, useEffect, forwardRef } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  className?: string;
  id?: string;
  disabled?: boolean;
}

export function Select({
  options,
  value,
  onChange,
  placeholder = "Wybierz...",
  label,
  error,
  className = "",
  id,
  disabled = false,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          setHighlightedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
          break;
        case "ArrowUp":
          event.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
          break;
        case "Enter":
          event.preventDefault();
          if (highlightedIndex >= 0) {
            onChange?.(options[highlightedIndex].value);
            setIsOpen(false);
            buttonRef.current?.focus();
          }
          break;
        case "Escape":
          setIsOpen(false);
          buttonRef.current?.focus();
          break;
        case "Tab":
          setIsOpen(false);
          break;
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, highlightedIndex, options, onChange]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && listRef.current) {
      const item = listRef.current.children[highlightedIndex] as HTMLElement;
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex, isOpen]);

  const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("relative w-full", className)} ref={containerRef}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2 block"
        >
          {label}
        </label>
      )}
      <button
        type="button"
        ref={buttonRef}
        id={selectId}
        disabled={disabled}
        onClick={() => {
          if (!disabled) {
            setIsOpen(!isOpen);
            setHighlightedIndex(options.findIndex((opt) => opt.value === value));
          }
        }}
        className={cn(
          "w-full h-12 px-4 bg-[var(--color-background)] border text-left flex items-center justify-between transition-all",
          isOpen
            ? "border-[var(--color-accent)] bg-white"
            : "border-[var(--color-border)] hover:border-[var(--color-text-muted)]",
          error && "border-[var(--color-error)]",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label ? selectId : undefined}
      >
        <span
          className={cn(
            "text-[15px] truncate",
            selectedOption ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-muted)]"
          )}
        >
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-[var(--color-text-muted)] flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul
          ref={listRef}
          className="absolute z-50 w-full mt-1 bg-white border border-[var(--color-border)] shadow-lg max-h-60 overflow-auto animate-fade-in-down"
          role="listbox"
          aria-activedescendant={highlightedIndex >= 0 ? `option-${options[highlightedIndex].value}` : undefined}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`option-${option.value}`}
              role="option"
              aria-selected={option.value === value}
              onClick={() => {
                onChange?.(option.value);
                setIsOpen(false);
                buttonRef.current?.focus();
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={cn(
                "px-4 py-3 flex items-center justify-between cursor-pointer transition-colors",
                highlightedIndex === index && "bg-[var(--color-accent-light)]",
                option.value === value
                  ? "text-[var(--color-accent)] font-medium"
                  : "text-[var(--color-text-primary)]"
              )}
            >
              <span className="text-[15px]">{option.label}</span>
              {option.value === value && (
                <Check className="w-4 h-4 text-[var(--color-accent)]" />
              )}
            </li>
          ))}
        </ul>
      )}

      {error && (
        <p className="mt-1.5 text-sm text-[var(--color-error)]">{error}</p>
      )}
    </div>
  );
}

// Native select fallback for forms that need it
export interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, label, error, options, placeholder, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2 block"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "w-full h-12 px-4 pr-10 border text-[15px] appearance-none transition-all",
              "bg-[var(--color-background)] border-[var(--color-border)]",
              "focus:outline-none focus:border-[var(--color-accent)] focus:bg-white",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-[var(--color-error)]",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)] pointer-events-none" />
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-[var(--color-error)]">{error}</p>
        )}
      </div>
    );
  }
);

NativeSelect.displayName = "NativeSelect";
