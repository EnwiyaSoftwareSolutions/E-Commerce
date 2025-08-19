import React from "react";
import Styles from './headder.module.css';
import { HeadderCarousel } from "./Carousel/HeadderCarousel";

const Headder: React.FC = () => {
    return (
        <div className={Styles.headderMainContainer}>
            <HeadderCarousel />
        </div>
    );
}
export default Headder;