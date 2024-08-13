import DockLayout, { DockContext, type LayoutData, type PanelData} from 'rc-dock'
import { Event } from "./Event"
import { Home } from "./Home"
import "rc-dock/dist/rc-dock.css";

import logo from './logo.png';
import iconGithub from "./assets/github.svg"

let groups = {
  'github-panel': {
    floatable: true,
    closable: true,
    panelExtra: () => {

      return <div className='flex items-center justify-center'>
        <a href="https://github.com/KalselJS" target="_blank"  rel="noreferrer">
            <img src={iconGithub} alt={`logo for github`} width={20} className='mr-2' />
        </a>
      </div>
    }
  }
}


const Title = ({ value } : { value: string }) => (
    <div className='flex items-center justify-center'>
      <img src={logo} alt={`logo for ${value}`} width={16} className='mr-2' />
      <p>{value}</p>
    </div>
)

export const Case = () => {
  const defaultLayout: LayoutData = {
    dockbox: {
      mode: 'horizontal',
      size: 250,
      children: [
        {
          tabs: [
            {id: 'tab1', title: (<Title value={"home.kalsel.js"}/>), content: Home, group: 'github-panel'},
            {id: 'tab2', title: (<Title value={"events.kalsel.js"}/>), content: Event,  group: 'github-panel'}
          ],
        }
      ]
    }
  };
    return (
        <DockLayout
          defaultLayout={defaultLayout}
          groups={groups}
          style={{
            position: "absolute",
            left: 10,
            top: 10,
            right: 10,
            bottom: 10,
          }}
        />
      )
}