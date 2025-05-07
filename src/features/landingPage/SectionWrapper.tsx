import styles from './LandingPage.module.scss';

interface Props {
  align?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ align = 'left', children, className }: Props) {
  const alignmentClass = align === 'right' ? styles.alignRight : styles.alignLeft;

  return <div className={`${styles.sectionWrapper} ${alignmentClass} ${className || ''}`}>{children}</div>;
}
