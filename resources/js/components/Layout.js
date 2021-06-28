import React, {Fragment} from 'react';
import Navbar from './Navbar';

// styles
import './styles/Layout.css';

const Layout = ( props ) => {
    return (
        <Fragment>
            <Navbar />
            <div className="Layout-content">
            { props.children}
            </div>
        </Fragment>
        
    )
}

export default Layout;