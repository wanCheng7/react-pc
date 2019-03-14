import React from 'react';
import './upperPart.scss';
import  '../../statics/iconfont/iconfont.css';


class UpperPart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            provincelist:false,
            volunteerlist:false
        }
    }

    //省份显示
    handleEnterProvince = () =>{
        this.setState({
            provincelist:true
        })
    }
    handLeaveProvince = () =>{
        this.setState({
            provincelist:false
        })
    }

    //志愿图片显示
    handleEnterVolunteerlist = () =>{
        this.setState({
            volunteerlist:true
        })
    }
    handleLeaveVolunteerlist = () => {
        this.setState({
            volunteerlist:false
        })
    }

    render(){
        return(
           <div>
               <div className="m-top">
                   <div className="header">
                       <h1 className="c-enplan2018__h1optimize">
                           <img src={"https://static.leke.cn/images/eduplan/logo.png"}/>
                       </h1>
                       <div className="eduplan-province">
                           <span className="text" onMouseEnter={this.handleEnterProvince} onMouseLeave={this.handLeaveProvince}>
                               <img className="icoImg" src={'https://static.leke.cn/images/entranceplanning/entranceplannig330-placeicon.png'}/>
                               <em>浙江</em>
                               <i class="iconfont icon-global-zk-line"></i>
                           </span>
                           <div className="provincelist"  style ={this.state.provincelist ? {display:'block'} : {display:'none'} } onMouseEnter={this.handleEnterProvince} onMouseLeave={this.handLeaveProvince}>
                               <span data-id="140000">山西</span><span data-id="210000">辽宁</span>
                               <span data-id="320000">江苏</span><span className="cur" data-id="330000">浙江</span>
                               <span data-id="360000">江西</span><span data-id="370000">山东</span>
                               <span data-id="410000">河南</span><span data-id="430000">湖南</span>
                               <span data-id="440000">广东</span><span data-id="510000">四川</span>
                           </div>
                       </div>
                       <div className="c-enplan2018__idealnormal" onMouseEnter={this.handleEnterVolunteerlist} onMouseLeave={this.handleLeaveVolunteerlist}>
                           {
                               this.state.volunteerlist ?
                                   <div className="c-enplan2018__idealchantip"></div>
                                   :
                                   null
                           }
                       </div>
                       <div className="c-member">
                           <div className="c-enplan2018__date">
                               <div className="c-enplan2018__year">距离2019年高考还剩</div>
                               <div className="c-enplan2018__sum">
                                   <span className='day'>
                                       <i className="ico-8"></i>
                                       <i className="ico-5"></i>
                                   </span>
                                   <sub>天</sub>
                               </div>
                               <div className="c-enplan2018__sumData">
                                   <span className="hour">
                                       <i className="ico-0"></i>
                                       <i className="ico-6"></i>
                                   </span>
                                   <sub>小时</sub>
                                   <span className="minute">
                                       <i className="ico-1"></i>
                                       <i className="ico-6"></i>
                                   </span>
                                   <sub>分钟</sub>
                                   <span className="second">
                                       <i className="ico-0"></i>
                                       <i className="ico-8"></i>
                                   </span>
                                   <sub>秒</sub>
                               </div>
                           </div>
                           <a className="dredge">开通会员</a>
                       </div>
                       {/*<div className="c-globalsearch" style="float: right;"></div>*/}
                   </div>
               </div>
           </div>
        )
    }
}

export default UpperPart;