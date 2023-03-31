import Carousel from 'react-bootstrap/Carousel';

function Hero() {
    return (
        <Carousel id='Hero' className='mb-4'>
            <Carousel.Item>
                <img

                    id='Carousel'
                    className="d-block w-100 h-30px"
                    src="https://www.persinsala.it/web/wp-content/uploads/2021/09/la-casa-di-carta-5-recensione.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img

                    id='Carousel'
                    className="d-block w-100"
                    src="https://www.orientaserie.it/wp-content/uploads/2020/04/Riverdale-2.jpg"
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    id='Carousel'
                    className="d-block w-100"
                    src="https://www.gedistatic.it/content/gnn/img/lastampa/2023/03/21/104331888-5fe2bdaf-95d5-4e7e-8307-b0e4d0a2ab4a.jpg"
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
}

export default Hero;