import React from 'react';
import Styles from './body.module.css';
import { ProductCard } from './ProductCard/ProductCard';
const Body : React.FC = () => {
    return (
        <div style={{backgroundColor: 'var(--color-background)'}}>
            <div className={Styles.bodyContainer}>
                <div className={Styles.bodyCardContainer}>
                    <ProductCard />
                    
                    
                </div> 
                </div> 
        </div>
    );
}       

export default Body;

