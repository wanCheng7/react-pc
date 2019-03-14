import React, { PureComponent } from 'react';
import { Table, Radio, Button, List } from 'antd';
import { PageViewWrap, RadioButtom, CollegeLabel, CollegeType, Table1 } from './style';
import './index.scss';

class Main extends PureComponent{
    constructor(props){
        super(props)
        this.state = { load : false, type: "0" };
        this.switchTabs = this.switchTabs.bind(this)
    }
    fetchData( opts ){

    }
    switchTabs(e){
        const type = e.target.value;
        this.setState({ type });
        console.log('切换了')
    }
    componentDidMount(){
        //发送数据请求
        this.setState({ 
            list: [
                { name: '中国人民解放军武装警擦部队武汉武警指挥学院', nums: 720, enroll: [1,2,3,4], id: '1' },
                { name: '中国人民解放军武装警擦部队武汉武警指挥学院', nums: 720, enroll: [1,2,3,4], id: '2' },
                { name: '中国人民解放军武装警擦部队武汉武警指挥学院', nums: 720, enroll: [1,2,3,4], id: '3' },
                { name: '中国人民解放军武装警擦部队武汉武警指挥学院', nums: 720, enroll: [1,2,3,4], id: '4' },
                { name: '中国人民解放军武装警擦部队武汉武警指挥学院', nums: 720, enroll: [1,2,3,4], id: '5' }
            ]
        })
    }
    render(){
        const { list = [ ], type } = this.state;
        return (
            <PageViewWrap>
                <div className="">
                    <Radio.Group value={type}
                                buttonStyle="solid"
                                onChange={this.switchTabs}
                                style={{marginBottom: "20px"}}>
                        <RadioButtom value="0">冲</RadioButtom>
                        <RadioButtom value="1">稳</RadioButtom>
                        <RadioButtom value="2">保</RadioButtom>
                        <RadioButtom value="3">其他</RadioButtom>
                    </Radio.Group>
                </div>
                <CollegeList list={list} />
                <Voluntary />
            </PageViewWrap>
        )
    }
}

/**
 * ==== 院校列表 ====
 * @param {*} param0 
 */
const CollegeList = ({ list = [ ] }) => {
    return (
        <React.Fragment>
            <Table1 dataSource={ list } 
                    pagination={false}
                    bordered={true}
                    rowKey="id" >
                <Table.Column title="院校名称"
                            dataIndex="name"
                            width="260"
                            key="name"
                            render={ CollegeName } />
                <Table.Column title="计划/剩余录取人数"
                            dataIndex="nums"
                            width="120"
                            align="center"
                            key="nums" />
                <Table.Column title="历年录取信息"
                            dataIndex="enroll"
                            key="enroll"
                            render={ EnrollList } />
                <Table.Column title="操作"
                            render={ () => <Button>加入志愿</Button> } />
            </Table1>
        </React.Fragment>
    )
}

/**
 * ==== 院校名称 ====
 * @param {*} val 
 * @param {*} record 
 */
const CollegeName = (val, record) => {
    return (
        <div className="">
            <div className="name">{val}</div>
            <CollegeType>
                <span>北京</span>
                <span>综合</span>
            </CollegeType>
            <CollegeLabel>
                <span>985</span>
                <span>双一流</span>
            </CollegeLabel>
        </div>
    )
}

/**
 * ==== 历年录取信息 ====
 * @param {*} list 
 * @param {*} record 
 */
const EnrollList = (list, record) => {
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
}

class Voluntary extends PureComponent{
    constructor(props){
        super(props)
        this.state = { };
    }
    componentDidMount(){
        this.setState({
            list: [{name: '哈工大', key: 0}]
        })
    }
    render(){
        const { list = [ ] } = this.state;
        return (
            <div className="voluntary">
                <div className="label">
                
                </div>
                <div className="content">
                    <List dataSource={ list } 
                            renderItem={( item ) => {
                                return <span>{item.name}</span>
                            }}/>
                </div>
            </div>
        )
    }
}

export default Main;