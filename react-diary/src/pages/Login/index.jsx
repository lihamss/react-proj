import React from 'react';
import './index.css'
import './index.less'
import classNames from 'classnames';
import { Form, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '@/store/modules/user';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [isSignup, setIsSignup] = React.useState(false);
    const [loginForm] = Form.useForm();
    const [signupForm] = Form.useForm();

    const changeType = () => {
        setIsSignup(!isSignup);
    }

    const handleLogin = async (data) => {
        console.log('Login data:', data);
        try {
            await dispatch(fetchLogin(data));
            navigate('/');
            message.success('登录成功');
        } catch (error) {
            message.error('登录失败: ' + error);
        }
    };

    const handleSignup = async (data) => {
        console.log('Signup data:', data);
        try {
            // Implement your signup API call here
            // For example: await dispatch(fetchSignup(data));
            message.success('注册成功');
            setIsSignup(false); // Switch back to login form after successful signup
            loginForm.resetFields(); // Reset login form fields
        } catch (error) {
            message.error('注册失败: ' + error.message);
        }
    };

    return (
        <div className={classNames('dowebok', { 's--signup': isSignup })}>
            <Form form={loginForm} className="form sign-in" validateTrigger={['onBlur']} onFinish={handleLogin}>
                <h2>欢迎回来</h2>
                <label>
                    <Form.Item name="email" rules={[
                        { required: true, message: '请输入邮箱' },
                        { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: '请输入正确的邮箱' }
                    ]}>
                        <input type="email" placeholder='请输入您的邮箱' id='email1'/>
                    </Form.Item>
                </label>
                <label>
                    <Form.Item name="password" rules={[
                        { required: true, message: '请输入密码' },
                        { pattern: /^[A-Za-z0-9]{6,20}$/, message: '密码必须是6-20位字母或数字的组合' }
                    ]}>
                        <input type="password" placeholder='密码' id='password1'/>
                    </Form.Item>
                </label>
                <p className="forgot-pass"><a href="javascript:">忘记密码？</a></p>
                <label>
                    <Form.Item>
                        <button type="submit" className="submit">登 录</button>
                    </Form.Item>
                </label>
                <button type="button" className="fb-btn">使用 <span>facebook</span> 帐号登录</button>
            </Form>
            <div className="sub-cont">
                <div className="img">
                    <div className="img__text m--up">
                        <h2>还未注册？</h2>
                        <p>立即注册，发现大量机会！</p>
                    </div>
                    <div className="img__text m--in">
                        <h2>已有帐号？</h2>
                        <p>有帐号就登录吧，好久不见了！</p>
                    </div>
                    <div className="img__btn" onClick={changeType}>
                        <span className="m--up">注 册</span>
                        <span className="m--in">登 录</span>
                    </div>
                </div>

                <Form form={signupForm} className="form sign-up" validateTrigger={['onBlur']} onFinish={handleSignup}>
                    <h2>立即注册</h2>
                    <label>
                        <Form.Item name="username" rules={[
                            { required: true, message: '请输入用户名' },
                        ]}>
                            <input type="text" placeholder='用户名' />
                        </Form.Item>
                    </label>
                    <label>
                        <Form.Item name="email" rules={[
                            { required: true, message: '请输入邮箱' },
                            { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: '请输入正确的邮箱' }
                        ]}>
                            <input type="email" placeholder='请输入您的邮箱' id='email2'/>
                        </Form.Item>
                    </label>
                    <label>
                        <Form.Item name="password" rules={[
                            { required: true, message: '请输入密码' },
                            { pattern: /^[A-Za-z0-9]{6,20}$/, message: '密码必须是6-20位字母或数字的组合' }
                        ]}>
                            <input type="password" placeholder='设置密码' id='password2'/>
                        </Form.Item>
                    </label>
                    <Form.Item>
                        <button type="submit" className="submit">注 册</button>
                    </Form.Item>
                    <button type="button" className="fb-btn">使用 <span>facebook</span> 帐号注册</button>
                </Form>
            </div>
        </div>
    );
};

export default Login;