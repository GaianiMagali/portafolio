import React from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import { AboutPage } from '../pages/AboutPage';
import { BlogsPage } from '../pages/BlogsPage';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';
import { PortfoliosPage } from '../pages/PortfoliosPage';

export const AppRouter = () => {
    return (
        <>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={HomePage}
                />

                <Route
                    exact
                    path="/about"
                    component={AboutPage}
                />

                <Route
                    exact
                    path="/portfolios"
                    component={PortfoliosPage}
                />

                <Route
                    exact
                    path="/blogs"
                    component={BlogsPage}
                />

                <Route
                    exact
                    path="/contact"
                    component={ContactPage}
                />
            </Switch>
        </>

    )
}