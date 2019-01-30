import React from 'react'
import { Route } from 'react-router'
import Home from '@/pages/home'
import SideMenu from '@/components/menu'
import config, {menuConfig} from '@/router/config'

export default class Common extends React.Component {
  render () {
    const {
      history
    } = this.props
    return (
      <div className='page-container'>
        <div className='side-menu'>
          <SideMenu history={history} />
        </div>
        <div className='content-container'>
          <Route key='home' path='/home' component={Home} />
          {menuConfig.map(item=>item.children.map(child=>{
            const path = `${item.path}/${child.path}`
            const component = config[child.component]
            return (<Route key={path} path={path} component={component} />)
          }))}
        </div>
      </div>
    );
  }
}