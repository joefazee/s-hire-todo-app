import React from 'react';
import {Menu} from 'semantic-ui-react';

const Header = (props) => {
    return (
        <Menu>
            <Menu.Menu>
            <Menu.Item>
            <h3>SkillHire Todo App</h3>
            </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default Header;