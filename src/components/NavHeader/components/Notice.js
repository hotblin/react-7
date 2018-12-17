import React,{PureComponent} from 'react';
import { Popover, Icon, Tabs, Badge, Spin,Avatar,List } from 'antd';
import style from './Notice.scss';

const { TabPane } = Tabs;

const ListA = function({
  list,name
}){
  
  const emptyImage = 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg';
  if(list.length === 0){
    return (
      <div className="notFound">
        <img src={emptyImage} alt="notfonnd"/>
        <div>暂无消息哦</div>
      </div>
    )
  }

  return (
    <div>
      <List className="list">
        {
          list.map((item,i) => {
            {/* console.log(item) */}
            return (
              <List.Item className="weidu" key={i}>
                 <List.Item.Meta description={
                   item.content
                 } title={item.title}>
                 </List.Item.Meta>
              </List.Item>
            )
          })
        }
      </List>
      <div>
        是否清空消息
      </div>
    </div>
  )
}

export default class Notice extends PureComponent{
  state = {
    tabContentArray:[{
      name:"通知(4)",
      list:[{
        title:"任务名称",
        status:"",
        content:"任务需要在2017年1.12前启动"
      }]
    },{
      name:"消息(10)",
      list:[{
        title:"任务名称",
        status:"",
        content:"任务需要在2017年1.12前启动"
      }]
    },{
      name:"待办(20)",
      list:[{
        title:"任务名称",
        status:"",
        content:"任务需要在2017年1.12前启动"
      }]
    }]
  }
  makePopoverContent = () => {
    const loading = false;
    const {tabContentArray} = this.state;
   
    const Content = tabContentArray.map((item,index) => {
      const {name,list}  = item;
      return (
        <TabPane tab={name} key={index}>
          <ListA list={list} name={name}></ListA>
        </TabPane>
      )

    });
    return (
      <Spin spinning={loading} delay={1}>
        <Tabs className="tabs">
          {Content}
        </Tabs>
      </Spin>
    )
  }


  render(){
    const count = 10;
    const {className} = this.props;
    const triggerContent = (
      <span className={`noticeButton ${className}`}>
        <Badge count={count} style={{ boxShadow: 'none' }}>
          <Icon type="bell" className="icon" />
        </Badge>
      </span>
    );
    const makePopoverContent = this.makePopoverContent();
    return(
       <Popover 
          placement="bottomRight" 
          content={makePopoverContent}
          popupClassName="popover"
          trigger="click"
          arrowPointAtCenter
          >
        {triggerContent}
      </Popover>
    )
  }
}