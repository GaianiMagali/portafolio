import React, { useState } from 'react';
import { Title } from '../components/common/Title';
import { Categories } from '../components/portfolios/Categories';
import { MenuItems } from '../components/portfolios/MenuItems';
import portfolios from '../data/allPortfolios';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

export const PortfoliosPage = () => {

    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filterCategories = (category) => {
        console.log("category", category);
        if (category === 'All') {
            setMenuItems(portfolios);
            return;
        }
        console.log(menuItems , "u");
        const filteredData = portfolios.filter((item) => {
            return item.category === category;
        })

        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolios'} span={'portfolios'} />
            </div>
            <div className="portfolios-data">
                <Categories filterCategories={filterCategories} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}
