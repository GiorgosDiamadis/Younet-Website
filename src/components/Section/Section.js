import ClassName from 'models/classname';

import styles from './Section.module.scss';

const Section = ({ children, className='', ...rest }) => {
  const sectionClassName = new ClassName(styles.section);

  sectionClassName.addIf(className, className);

  return (
    <section className={className} {...rest}>
      {children}
    </section>
  );
};

export default Section;
