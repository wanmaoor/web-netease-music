import Nav from '../../components/Nav/Nav';
import SplitPane from 'react-split-pane';
import './index.scss';
import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';
const Main = () => {
  return (
    <>
      <Nav />
      <div className="Resizer" style={{ marginTop: 60 }}>
        <SplitPane
          split="vertical"
          minSize={200}
          maxSize={600}
          allowResize={true}
        >
          <LeftPanel />
          <RightPanel />
        </SplitPane>
      </div>
    </>
  );
};

export default Main;
