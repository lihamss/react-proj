/*
 * @Author: leohams
 * @Date: 2024-09-10 18:14:24
 * @LastEditors: fang
 * @LastEditTime: 2024-09-14 16:32:05
 * @FilePath: \react-proj\react-diary\src\components\content\NoteItem.jsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const NoteItem = ({changeLayout}) => {
  
  return (
    <div className='card-item' onClick={changeLayout}>
      <Card
        hoverable={true}
        style={{
          width: 260,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>

  )
}
export default NoteItem;