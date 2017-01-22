import React, {Component, PropTypes} from 'react';
import './index.css'
class Button extends Component{
  static propTypes = { //属性类型检查

  }

  static defaultProps = { //默认属性设置
    clsName : '', //用于自定义class
    type : 'default', //type不设的时候的class
    disabled : false,  //按钮
    isPlain : false   //是否是空心按钮
  }

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    let {clsName, type, disabled, isPlain} = this.props;
    let disableCls = disabled ? 'btn-disabled' : '';
    let isPlainCls = isPlain ? 'btn-is-plain' : '';
    let finalClsName = `btn ${clsName} btn-${type} ${isPlainCls} ${disableCls} `;
    return (
        <button type="button" disabled={disabled} className={finalClsName}>
          <span>{this.props.children}</span>
        </button>
    );
  }

}

export default Button;
