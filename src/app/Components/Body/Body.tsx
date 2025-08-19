import React from 'react';
import Styles from './body.module.css';
import { ProductCard } from './ProductCard/ProductCard';
const Body : React.FC = () => {
    return (
        <div className={Styles.bodyMainContainer}>
            <div className={Styles.bodyContainer}>
                <div className={Styles.bodyCardContainer}>
                    <ProductCard />
                    
                    
                </div> 
                </div> 
        </div>
    );
}       

export default Body;

