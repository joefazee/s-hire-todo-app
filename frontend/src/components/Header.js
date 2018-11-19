import React from 'react';
import {Menu} from 'semantic-ui-react';

const Header = (props) => {
    return (
        <Menu>
            <Menu.Menu>
            <Menu.Item>
            <h3>SkillHire todo app</h3>
            </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default Header;