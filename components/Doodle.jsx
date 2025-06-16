'use client';
import dynamic from 'next/dynamic';

export default dynamic(
  () => {
    return import('css-doodle').then(() => {
      const CssDoodleComponent = ({ children, className, ...props }) => (
        <css-doodle class={className} {...props}>
          {children}
        </css-doodle>
      );
      return { default: CssDoodleComponent };
    });
  },
  { ssr: false, loading: () => <div className="absolute inset-0" /> },
);
