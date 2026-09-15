import type { HTMLAttributes, PropsWithChildren } from 'react';

interface ClassNameProps {
  className?: string;
}

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Container({
  className,
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={joinClasses('ds-container', className)} {...props}>
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <section className={joinClasses('ds-section', className)} {...props}>
      {children}
    </section>
  );
}

export function Eyebrow({
  className,
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p className={joinClasses('ds-eyebrow', className)} {...props}>
      {children}
    </p>
  );
}

export function Heading({
  className,
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h2 className={joinClasses('ds-heading', className)} {...props}>
      {children}
    </h2>
  );
}

export function Text({
  className,
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p className={joinClasses('ds-text', className)} {...props}>
      {children}
    </p>
  );
}

interface CardProps extends HTMLAttributes<HTMLDivElement>, ClassNameProps {
  variant?: 'default' | 'dark' | 'accent' | 'upcoming';
}

export function Card({
  variant = 'default',
  className,
  children,
  ...props
}: PropsWithChildren<CardProps>) {
  return (
    <div
      className={joinClasses(
        'ds-card',
        variant === 'default' ? undefined : `ds-card--${variant}`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, ClassNameProps {
  tone?: 'neutral' | 'ai' | 'careerignite' | 'gradlm';
}

export function Badge({
  tone = 'neutral',
  className,
  children,
  ...props
}: PropsWithChildren<BadgeProps>) {
  return (
    <span
      className={joinClasses(
        'ds-badge',
        tone === 'neutral' ? undefined : `ds-badge--${tone}`,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function Divider({ className, ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr className={joinClasses('ds-divider', className)} {...props} />;
}