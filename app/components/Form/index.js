import React, {Component} from 'react';
//表单demo测试
class Form extends Component{
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      radioValue : '',
    };
  }

  handleChange(e){
      this.setState({
        radioValue: e.target.value,
      });
  }

  render(){
    const { radioValue } = this.state;

    return (
      <div>
        <p>性别</p>
        <label>
          男：
          <input type="radio"
          value="male"
          checked={radioValue === 'male'}
          onChange={this.handleChange}
          />
        </label>

        <label>
          女：
          <input type="radio"
          value="female"
          checked={radioValue === 'female'}
          onChange={this.handleChange}
          />
        </label>

      </div>
    );
  }



}


export default Form;
