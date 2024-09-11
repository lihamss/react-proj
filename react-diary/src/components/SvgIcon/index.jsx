// 设计图标组件 包含width和height属性， 默认都为16px
const SvgIcon = ({width = '16px', height='16px', name}) => {
    return (
        <div>
            <svg style={{width, height}}>
            </svg>
        </div>
    )
}

export default SvgIcon