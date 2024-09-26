import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select, Space, message } from 'antd';
import { Cascader } from 'antd';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import {
    FolderOutlined, FileOutlined, PictureOutlined,
    VideoCameraOutlined, AudioOutlined, StarOutlined
} from '@ant-design/icons';
import * as AntIcons from '@ant-design/icons';
import { createCategory } from '@/apis/category';
const { Option } = Select;

const iconNames = [
    'FolderOutlined',
    'FileOutlined',
    'PictureOutlined',
    'VideoCameraOutlined',
    'AudioOutlined',
    'StarOutlined',
    'FolderOpenOutlined',
    'FileAddOutlined',
    'FileTextOutlined',
    'FileSyncOutlined',
    'CloudUploadOutlined',
    'CloudDownloadOutlined',
    'DatabaseOutlined',
    'UnorderedListOutlined',
    'FileSearchOutlined',
    'RollbackOutlined', // 有趣的撤回图标
    'DragOutlined', // 拖拽图标
    'CopyOutlined', // 复制图标
    'ShareAltOutlined', // 分享图标    
    'HeartOutlined', // 心形图标，可以用多种颜色
    'SmileOutlined', // 微笑图标
    'CoffeeOutlined', // 咖啡图标
    'SmileTwoTone', // 双色微笑图标
];

const iconOptions = iconNames.map(name => ({
    icon: AntIcons[name], // 动态获取图标组件
    name,
}));

const iconOptions1 = [
    { icon: <FolderOutlined />, name: 'FolderOutlined' },
    { icon: <FileOutlined />, name: 'FileOutlined' },
    { icon: <PictureOutlined />, name: 'PictureOutlined' },
    { icon: <VideoCameraOutlined />, name: 'VideoCameraOutlined' },
    { icon: <AudioOutlined />, name: 'AudioOutlined' },
    { icon: <StarOutlined />, name: 'StarOutlined' },
];
const IconSelect = ({ value, onChange }) => {
    
    
    return (
        <Space wrap>
            {iconOptions.map(option => (
                <Button
                    key={option.name}
                    type={value === option.name ? 'primary' : 'default'}
                    icon={React.createElement(option.icon)}
                    onClick={() => {
                        // 如果当前选中项被点击，则取消选择
                        if (value === option.name) {
                            onChange(null); // 或者使用 undefined
                        } else {
                            onChange(option.name);
                        }
                    }}
                    style={{ width: '20', height: '20', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                </Button>
            ))}
        </Space>
    );
};

// 通用的添加内容组件
const AddContent = ({ type, isModalVisible, onOk, onCancel, category1List }) => {
    const [form] = Form.useForm();

    const optionLists = [{}]
    useEffect(() => {
        const optionLists = category1List.map(item => ({
            key: item.id,
            id: item.id,
            label: item.name,
            value: item.id,
            children: item.children.length === 0 ? [] : item.children.map(child => ({
                id: child.id,
                label: child.name,
                value: child.id,
            }))
        }));
        setOptions(optionLists);
    }, [category1List]);


    useEffect(() => {
        if (!isModalVisible) {
            form.resetFields();
        }
    }, [isModalVisible]);

    const [options, setOptions] = useState(optionLists);

    console.log("options", options)
    const onChange = (value, selectedOptions) => {
        console.log(value, selectedOptions);
    };

    // 添加目录提交按钮
    const onFinish = async (values) => {
        console.log('提交的值:', values);
        const res = await createCategory({
            name: values.title,
            icon: values.icon,
            level: values.parentDirectory.length + 1,
            parentId: values.parentDirectory[values.parentDirectory.length - 1]
        })
        console.log(res)
        if (res.code === '1') {
            message.success("添加成功")
        }
        // 这里可以添加提交逻辑
        onOk(values); // 调用父组件传递的onOk函数，可以传递表单值
    };

    // // 获取一级菜单列表
    // useEffect(() => {
    //     dispatch(fetchCategoryList1())
    // }, [dispatch])

    return (
        <Modal
            title={type === 'directory' ? "添加目录" : "添加文章"}
            visible={isModalVisible}
            onCancel={onCancel}
            footer={null}
            maskClosable={false} // 添加这个属性来防止点击遮罩关闭Modal
        >
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item name="title" label="标题" rules={[{ required: true, message: '请输入标题！' }]}>
                    <Input />
                </Form.Item>

                {type === 'article' && (
                    <Form.Item name="content" label="内容" rules={[{ required: true, message: '请输入内容！' }]}>
                        <Input.TextArea rows={4} />
                    </Form.Item>
                )}

                {type === 'directory' && (
                    <Form.Item name="parentDirectory" label="父目录">
                        <Cascader key={nanoid()} options={options} onChange={onChange} changeOnSelect />
                    </Form.Item>
                )}

                <Form.Item name="icon" label="目录图标" rules={[{ required: false, message: '请选择图标！' }]}>
                    <IconSelect />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};
export default AddContent;