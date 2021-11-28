import React, { useState } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './css.module.less';

const MenuList = () => {
  // 多國翻譯
  const { t } = useTranslation();

  const [activeItem, setActiveItem] = useState();



  const menuItem = [
    { name: t('menu.NEWS'), to: '/twBus/news' },
    { name: t('menu.BUSACTION'), to: '/twBus' },
    { name: t('menu.ROUTERSEARCH'), to: '/twBus/router-search' },
    { name: t('menu.NEARROUTER'), to: '/twBus/near-router' },
    { name: t('menu.OTHERINFO'), to: '/twBus/other-info' },
  ];

  return (
    <div>
      <Menu secondary className="nav">
        {
          menuItem.map((item) => (
            <Menu.Item
              key={item.to}
              as={Link}
              to={item.to}
              content={item.name}
              active={window.location.pathname === item.to || activeItem === item.to}
              onClick={() => setActiveItem(item.to)}
            />
          ))
        }
      </Menu>
    </div>
  );
};

export default MenuList;
