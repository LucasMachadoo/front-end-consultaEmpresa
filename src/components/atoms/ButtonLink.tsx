import React, { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  label: string;
  className?: string;
  children?: ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, label, className, children }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={`text-center bg-orange-400  hover:bg-orange-300 text-white font-bold py-2 px-4 rounded transition-all ease-in-out ${className}`}>
        {label}
        {children}
      </a>
    </Link>
  );
};

export default ButtonLink;
