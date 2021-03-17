import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from 'src/components/List';
import { IReducer } from 'src/interface';
import { CHANGE_ACTIVE_KEY } from './action';
import './index.scss';

const LeftPanel = () => {
  const dispatch = useDispatch();
  const { activeKey } = useSelector((state: IReducer) => state.leftPaneReducer);
  const handleClick = (key: string) => {
    dispatch({ type: CHANGE_ACTIVE_KEY, payload: key });
  };
  return (
    <div className="left-pane-container">
      <List activeKey={activeKey} handleClick={handleClick} />
    </div>
  );
};

export default LeftPanel;
