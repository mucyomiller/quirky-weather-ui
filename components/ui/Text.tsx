import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const textStyles = cva(
  'text-black dark:text-white',
  {
    variants: {
      variant: {
        h1: 'text-4xl font-bold',
        h2: 'text-3xl font-semibold',
        h3: 'text-2xl font-semibold',
        h4: 'text-xl font-semibold',
        body: 'text-base',
        small: 'text-sm',
        label: 'text-sm font-semibold',
      },
      color: {
        primary: 'text-primary-600 dark:text-primary-400',
        secondary: 'text-secondary-600 dark:text-secondary-400',
        error: 'text-error-600 dark:text-error-400',
        success: 'text-success-600 dark:text-success-400',
        warning: 'text-warning-600 dark:text-warning-400',
        info: 'text-info-600 dark:text-info-400',
      },
    },
    defaultVariants: {
      variant: 'body',
    },
  }
);

interface TextProps extends VariantProps<typeof textStyles> {
  children: React.ReactNode;
  className?: string;
}

const Text: FC<TextProps> = ({ children, variant, color, className, ...props }) => {
  return (
    <span className={`${textStyles({ variant, color })} ${className || ''}`} {...props}>
      {children}
    </span>
  );
};

export { Text };
