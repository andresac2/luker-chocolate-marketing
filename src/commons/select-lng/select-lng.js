import React from 'react';
import i18n from '../../i18n';
import { withRouter } from 'react-router-dom';
import { Select } from 'antd';

const { Option } = Select;

const useStateWithLocalStorage = localStorageKey => {

  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const SelectLanguage = (props) => {
  // const [value, setValue] = useStateWithLocalStorage('lukerLng');
  const { history } = props;

  const _handleChange = (lng) => {
    //  setValue(lng);
    console.log("language", lng)
    i18n.changeLanguage(lng);
    if (history.location.pathname.slice(1).split('/').shift() === "blog") {
      //window.location.reload();
      // i18n.changeLanguage(value);
    }
  };

  return (
    <Select defaultValue={i18n.language} onChange={_handleChange}  >
      <Option value="es">ES</Option>
      <Option value="en">EN</Option>
    </Select>
  );
};

export default withRouter(SelectLanguage);