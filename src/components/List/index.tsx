import classNames from 'classnames';
import React, { useCallback } from 'react';
import './index.scss';
const mainArr = [
  { key: 'discover', name: '发现音乐' },
  { key: 'videos', name: '视频' },
  { key: 'friends', name: '朋友' },
  { key: 'lives', name: '直播' },
];
interface IListProps {
  handleClick: (key: string, e: React.MouseEvent) => void;
  activeKey: string;
}

const List = (props: IListProps) => {
  const { handleClick, activeKey } = props;
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      const innerText = (e.target as HTMLElement).innerText;
      const item = mainArr.find((item) => item.name === innerText);
      if (item) {
        handleClick(item.key, e);
      }
    },
    [handleClick],
  );

  return (
    <div className='list-container'>
      <ul onClick={onClick} className="list-ul">
        {mainArr.map((item) => {
          return (
            <li
              className={classNames({ active: activeKey === item.key })}
              key={item.key}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <div>
        <span>我的音乐</span>
        
      </div>
    </div>
  );
};

export default List;
