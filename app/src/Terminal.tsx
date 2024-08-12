import DockLayout, { type LayoutData} from 'rc-dock'
import { Event } from "./Event"
import { Home } from "./Home"
import "rc-dock/dist/rc-dock.css";
import logo from './logo.png';

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
      children: [
        {
          tabs: [
            {id: 'tab1', title: (<Title value={"home.kalsel.js"}/>), content: Home},
            {id: 'tab2', title: (<Title value={"events.kalsel.js"}/>), content: Event}
          ]
        }
      ]
    }
  };
    return (
        <DockLayout
          defaultLayout={defaultLayout}
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