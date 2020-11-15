import React from 'react';
import classnames from 'classnames';
import styles from './Text.module.css';

type textProps = {
  children: React.ReactNode;
  classNames?: string;
  style?: React.CSSProperties;
  bold?: {};
};

const Text: React.FC<textProps> = ({
  classNames,
  children,
  style = {},
  bold,
}) => {
  const weight = bold ? 700 : 300;
  const styless: React.CSSProperties = { ...style, fontWeight: weight };

  return (
    <div style={styless} className={classnames(styles.box, classNames)}>
      {children}
    </div>
  );
};

export default Text;
