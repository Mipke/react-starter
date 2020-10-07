import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from './Routes';

const App = () => {
    return (
        <BrowserRouter>
            <div className={styles.app}>
                {routes.map((route, index) => (
                    <Route key={`${index}-${route.path}`} exact={true} {...route} />
                ))}
            </div>
        </BrowserRouter>
    );
};

export default App;
