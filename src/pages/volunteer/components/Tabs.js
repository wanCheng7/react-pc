import React, { PureComponent } from 'react';
import { Radio } from 'antd';

class Tabs extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tabList: [
        {value: 0, tabName:'冲', text:'略高于你的成绩水平，可以尝试冲击！'},
        {value: 1, tabName:'稳', text:'22略高于你的成绩水平，可以尝试冲击！'},
        {value: 2, tabName:'保', text:'33略高于你的成绩水平，可以尝试冲击！'},
        {value: 3, tabName:'其他', text:'44略高于你的成绩水平，可以尝试冲击！'},
      ],
      activeTab: 0,  //选中的tab
      activeText: '略高于你的成绩水平，可以尝试冲击！'
    }
  }

  // 选项变化时的回调函数
  tabChangeFn(e) {
    let val = e.target.value;
    this.setState({
      activeTab: val,
      activeText: this.state.tabList[val].text
    })
  };

  render() {
    return (
      <div>
        <Radio.Group defaultValue={this.state.activeTab} buttonStyle="solid" onChange={this.tabChangeFn.bind(this)}>
          {
            this.state.tabList.map((item, idnex) => {
              return <Radio.Button value={item.value} key={idnex.toString()}>{item.tabName}</Radio.Button>
            })
          }
        </Radio.Group>
        <p>{this.state.activeText}</p>
      </div>
    )
  }
}

export default Tabs