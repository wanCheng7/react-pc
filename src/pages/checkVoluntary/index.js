import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './voluntary.scss'
import Tabs from './components/Tabs'
import TableList from './components/TableList'

let collegeList = [
  { name: '哈尔滨工业大学', majorName:'新闻传播专业', nums: 720, enroll: [1,2,3,4], id: 1 },
  { name: '哈尔滨工业大学', majorName:'新闻传播专业', nums: 720, enroll: [1,2,3,4], id: 2 },
  { name: '哈尔滨工业大学', majorName:'新闻传播专业', nums: 720, enroll: [1,2,3,4], id: 3 },
  { name: '哈尔滨工业大学', majorName:'新闻传播专业', nums: 720, enroll: [1,2,3,4], id: 1 },
]

class Voluntary extends PureComponent {
  render() {
    return (
      <div className="content_box">
        <Tabs />
        <TableList list={collegeList}  />
      </div>
    )
  }
};

const mapState = (state) => ({
	
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Voluntary)