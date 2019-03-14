import React, { PureComponent } from 'react';
import { Table, List, Button } from 'antd';
import './tableList.scss'

class TableList extends PureComponent {
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

  EnrollList(list, record) {
    let label = [ "录取人数", "录取段数", "专业录取最低分次位", "录取最低分" ]
    return (
        <List dataSource={ list }
                renderItem={(item, index) => {
                    return (
                        <div className="">
                            <span>{label[index]}</span>
                            <span>{item}</span>
                        </div>
                    )
                }} />
    )
  };
  // 院校名称相关信息
  collegeName (text, record, index) {
    return (
      <div className="college_box">
        <div className="name">{text}</div>
        <div className="desc">
            <span>北京</span><span>综合</span>
        </div>
        <div className="label">
            <span>985</span>
            <span>双一流大学</span>
        </div>
      </div>
    )
  };
  // 专业类名称
  majorName(text, record, index) {
    return (
      <div className="major_box">
        <p className="name">{text}</p>
        <p className="desc">英语成绩需要满足100分，含软件工程专业满足100分。含软件工程英语成绩需要100</p>
        <p className="lab_box clearfix">
          <span className="lef">物理/化学/生物</span>
          <span className="rig">4年 | ￥8888</span>
        </p>
      </div>
    )
  };
  


  render() {
    return (
      <React.Fragment>
        <Table dataSource={ this.props.list } 
                pagination={false}
                bordered={true}
                rowKey="id" >
            <Table.Column title="院校名称"
                        dataIndex="name"
                        key="collegeName"
                        render={this.collegeName.bind(this)} />
            <Table.Column title="专业类名称"
                        dataIndex="majorName"
                        key="name"
                        render={this.majorName.bind(this)} />
            <Table.Column title="计划/剩余录取人数"
                        dataIndex="nums"
                        key="nums" />
            <Table.Column title="历年录取信息"
                        dataIndex="enroll"
                        key="enroll"
                         />
            <Table.Column title="操作"
                        render={ () => <Button>加入志愿</Button> } />
        </Table>
      </React.Fragment>
    )
  }
}

export default TableList