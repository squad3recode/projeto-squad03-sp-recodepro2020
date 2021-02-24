import React from 'react';

import styles from './styles.css';
import bannerWeb from '../../assets/imagens/banner.png';
import bannerMobile from '../../assets/imagens/bannerMobile.png';

const Banner = () => {
    return (
        <section className="section-1">
            <img className="banner-web" src={bannerWeb} alt="Banner" />
            <img className="banner-mobile" src={bannerMobile} alt="Banner" />
            <div>
                <a href="./quizUm.html"><b>Realizar o Quiz</b></a>
            </div>
        </section>
    );
}

export default Banner;
