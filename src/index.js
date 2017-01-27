import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Sidebar = (props) => (
   <aside className='sidebar'>
     {props.children}
   </aside>
)

class App extends Component {
  render = () => (
    <div className='App'>
      <div>Main Content</div>
      <Sidebar>
        <div className='widget'>
          Widget 1
        </div>
        <div className='widget'>
          Widget 2
        </div>
      </Sidebar>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);