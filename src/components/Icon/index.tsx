import { CSSProperties, useEffect, useState } from 'react';

interface IIcon {
  name: string;
  size?: 'mini' | 'default' | 'medium' | 'large' | number;
  style?: CSSProperties
}
const Icon = ({ name, size, style }: IIcon) => {
  const [iconSize, setIconSize] = useState(12);
  useEffect(() => {
    if (typeof size === 'number') {
      setIconSize(size);
    } else {
      switch (size) {
        case 'mini':
          setIconSize(12);
          break;
        case 'default':
          setIconSize(16);
          break;
        case 'medium':
          setIconSize(24);
          break;
        case 'large':
          setIconSize(32);
          break;
        default:
          setIconSize(16);
          break;
      }
    }
  }, [size]);

  const styles: CSSProperties = {
    fontSize: iconSize,
    ...style,
  };
  return (
    <svg className="icon" aria-hidden="true" style={styles}>
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  );
};

export default Icon;
