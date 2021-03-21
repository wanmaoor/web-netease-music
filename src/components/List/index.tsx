import classNames from 'classnames';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
const mainArr = [
  { key: 'discover', name: '发现音乐', path: '/' },
  { key: 'videos', name: '视频', path: '/main/videos' },
  { key: 'friends', name: '朋友', path: '/main/friends' },
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
            <Link to={item.path} style={{ color: '#2e2d2d' }} key={item.key}>
              <li
                className={classNames({ active: activeKey === item.key })}
              >
                {item.name}
              </li>
            </Link>
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
