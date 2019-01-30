import React, {Component} from 'react'
import {Menu} from 'antd'
import { menuConfig } from '@/router/config'
const { SubMenu, Item } = Menu

export default class SideMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
      mode: 'inline', // vertical horizontal inline
      theme: 'light', // light dark
    }
    this.menuClick = this.menuClick.bind(this)
  }

  menuClick(target){
    const { key = '/home' } = target
    const {history} = this.props
    history.push(key)
  }

  render () {
    return (
      <Menu 
        mode={this.state.mode} 
        theme={this.state.theme}
        style={{minHeight: '100vh'}} 
        onClick={this.menuClick}
      >
        {menuConfig.map(item=>{
          return (<SubMenu
            key={item.path}
            title={<div title={item.title}>{item.label}</div>}
          >
            {item&&item.children.map(child=>{
              return (<Item
                key={`${item.path}/${child.path}`}
                title={child.title}
              >{child.label}</Item>);
            })}
          </SubMenu>);
        })}
      </Menu>
    );
  }
}