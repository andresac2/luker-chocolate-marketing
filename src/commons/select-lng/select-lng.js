import React from 'react';
import i18n from '../../i18n';
import { Select } from 'antd';

class SelectLanguage extends React.Component {

  constructor(props) {
    super(props);
  }
  _handleChange(lng) {
    console.log("language", lng)
    i18n.changeLanguage(lng);
  }

  render() {
    const { visible, modal, product, title, subtitle, contentTitle } = this.props;
    const { Option } = Select;

    return (
      <Select defaultValue={i18n.language} onChange={this._handleChange}  >
        <Option value="es">ES</Option>
        <Option value="en">EN</Option>
      </Select>
    );
  }
};
export default SelectLanguage;