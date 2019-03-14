import React from 'react';
import './underPart.scss';

class UnderPart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="z-entranceplanning-menu">
                <div className="menu">
                    <ul id="navs">
                        <li className="cur">
                            <a href="https://eduplan.leke.cn/index.htm">首页</a>
                        </li>
                        <li className="" id="j_assessment">
                            <a href="https://eduplan.leke.cn/auth/student/epassessment/epassessmentIndex.htm">专业选择测评</a>
                        </li>
                        <li className="">
                            <a href="https://eduplan.leke.cn/auth/student/newexam/view.htm">浙江"7选3"</a>
                        </li>
                        <li className="" id="forecast">
                            <a href="#">升学预测</a>
                        </li>
                        <li className="drpmenu ">
                            <a href="#">历年录取分数&nbsp;&nbsp;&nbsp;</a>
                            <div className="menucon">
                                <ul>
                                    <li>
                                        <a href="https://eduplan.leke.cn/auth/student/collegeEntrance/collegeEntrancelistNew1.htm?action=norm">查院校录取 </a>
                                    </li>
                                    <li>
                                        <a href="https://eduplan.leke.cn/auth/student/lqcx/major/majorList.htm">查专业录取</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="drpmenu ">
                            <a href="#">升学信息库</a>
                            <div className="menucon">
                                <ul>
                                    <li>
                                        <a href="https://eduplan.leke.cn/college/collegelistNew.htm">院校库</a>
                                    </li>
                                    <li>
                                        <a href="https://eduplan.leke.cn/profession/list.htm">专业库</a>
                                    </li>
                                    <li>
                                        <a href="https://eduplan.leke.cn/career/list.htm">职业库</a>
                                    </li>
                                    <li>
                                        <a href="https://eduplan.leke.cn/auth/student/tinity/tinitylist.htm">浙江三位一体</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="">
                            <a href="https://eduplan.leke.cn/student/lxt/lxtIndex.htm">乐学堂</a>
                        </li>
                    </ul>
                    <span className="predictMore">
                        <em className="moremenu">
                            我的升学
                            <div>
                                <ul>
                                    <li>
                                        <a href="#" className="noborder">激活会员</a>
                                    </li>
                                    <li>
                                        <a href="#" className="noborder" id="examinfo">设置高考信息</a>
                                    </li>
                                    <li id="gkmb">
                                        <a href="#" className="noborder">我的高考目标</a>
                                    </li>
                                    <li>
                                        <a href="#" className="noborder" id="myvolunteer">升学预测志愿表</a>
                                    </li>
                                    <li>
                                        <a href="#" className="noborder">模拟志愿表</a>
                                    </li>
                                    <li>
                                        <a href="#" className="noborder" id="j_myassessment">我的测评报告</a>
                                    </li>
                                    <li id="bxks">
                                        <a href="#" className="noborder">本校考试</a>
                                    </li>
                                    <li id="brks">
                                        <a href="#" className="noborder">本人考试</a>
                                    </li>
                                </ul>
                            </div>
                        </em>
                    </span>
                </div>
            </div>
        )
    }
}

export default UnderPart;