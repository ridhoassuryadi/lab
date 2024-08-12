import DockLayout, { type LayoutData} from 'rc-dock'
import { Event } from "./Event"
import { Home } from "./Home"
import "rc-dock/dist/rc-dock.css";



export const Case = () => {
  const defaultLayout: LayoutData = {
    dockbox: {
      mode: 'horizontal',
      children: [
        {
          tabs: [
            {id: 'tab1', title: 'home.kalsel.js', content: Home},
            {id: 'tab2', title: 'events.kalsel.js', content: Event}
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