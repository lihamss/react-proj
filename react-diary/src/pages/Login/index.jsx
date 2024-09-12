import React from 'react';
import './index.css'
import classNames from 'classnames';
const Login = () => {
    const [isSignup, setIsSignup] = React.useState(false);
    const changeType = () => {
        setIsSignup(!isSignup);
    }
    return (
        <div className={classNames('dowebok', { 's--signup': isSignup })}>
            <div className="form sign-in">
                <h2>欢迎回来</h2>
                <label>
                    {/* <span>邮箱</span> */}
                    <input type="email" placeholder='请输入您的邮箱'/>
                </label>
                <label>
                    {/* <span>密码</span> */}
                    <input type="password" placeholder='密码'/>
                </label>
                <p className="forgot-pass"><a href="javascript:">忘记密码？</a></p>
                <button type="button" className="submit">登 录</button>
                <button type="button" className="fb-btn">使用 <span>facebook</span> 帐号登录</button>
            </div>
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
                <div className="form sign-up">
                    <h2>立即注册</h2>
                    <label>
                        {/* <span>用户名</span> */}
                        <input type="text" placeholder='用户名'/>
                    </label>
                    <label>
                        {/* <span>邮箱</span> */}
                        <input type="email" placeholder='请输入您的邮箱'/>
                    </label>
                    <label>
                        {/* <span>密码</span> */}
                        <input type="password" placeholder='设置密码'/>
                    </label>
                    <button type="button" className="submit">注 册</button>
                    <button type="button" className="fb-btn">使用 <span>facebook</span> 帐号注册</button>
                </div>
            </div>
        </div>

    );
};
export default Login;