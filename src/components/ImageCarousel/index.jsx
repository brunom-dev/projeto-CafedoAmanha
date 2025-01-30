import React from 'react';
import { Carousel } from 'react-bootstrap';
import './imageCarousel.css';

import foto1 from '../../assets/images/casal3.jpg';
import foto2 from '../../assets/images/cafe1.jpeg';
import foto3 from '../../assets/images/cafe2.jpeg';


export default function ImageCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={foto1}
                    alt="Primeira imagem"
                />
                <Carousel.Caption>
                    <h3>Nanda e Junior</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={foto2}
                    alt="Segunda imagem"
                />
                <Carousel.Caption>
                    <h3>Nossas delícias</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={foto3}
                    alt="Terceira imagem"
                />
                <Carousel.Caption>
                    <h3>Nosso espaço</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
