import './about.css';

import ImageCarousel from '../../components/ImageCarousel';

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2>Sobre Nós</h2>
                <p>O Café do Amanhã foi fundado por Nanda e Junior, dois apaixonados por café e pela cidade de Fortaleza.
                Localizado na Avenida Beira Mar, nosso café oferece um refúgio acolhedor onde você pode desfrutar de 
                sabores únicos e de uma vista deslumbrante.</p>
                <ImageCarousel />
            </div>
        </section>
    );
}