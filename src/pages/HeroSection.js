import React from 'react';
import styles from "../assets/css/style.module.css";

const HeroSection = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Bubbles Animation</h1>
            {[...Array(15)].map((_, index) => (
                <div key={index} className={styles.circle}>
                    <span className={styles.dot}></span>
                </div>
            ))}
        </div>
    );
};

export default HeroSection;