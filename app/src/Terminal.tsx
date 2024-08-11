import DockLayout, { type LayoutData} from 'rc-dock'
import "rc-dock/dist/rc-dock-dark.css";

const defaultLayout: LayoutData = {
    dockbox: {
      mode: 'horizontal',
      children: [
        {
          tabs: [
            {id: 'tab1', title: 'home.kalsel.js', content: <div>Hello World</div>},
            {id: 'tab2', title: 'events.kalsel.js', content: <div>Hello World</div>}
          ]
        }
      ]
    }
  };

export const Case = () => {
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