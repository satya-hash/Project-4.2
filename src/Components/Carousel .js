import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent() {
	let slideImages = [
		"https://www.andhrauniversity.edu.in/img/slider/1.jpg",
		"https://www.andhrauniversity.edu.in/img/slider/wal2.jpg",
		"https://www.andhrauniversity.edu.in/img/slider/wal1.jpg",
	];

	return (
		<div className="carousel-wrapper">
			<Carousel
				infiniteLoop
				useKeyboardArrows
				autoPlay
				showThumbs={false}
				showStatus={false}
			>
				<div>
					<img
						src="https://www.andhrauniversity.edu.in/img/slider/1.jpg"
						alt="au"
					/>
				</div>
				<div>
					<img
						src="https://www.andhrauniversity.edu.in/img/slider/wal2.jpg"
						alt="au"
					/>
				</div>
				<div>
					<img
						src="https://www.andhrauniversity.edu.in/img/slider/wal1.jpg"
						alt="au"
					/>
				</div>
			</Carousel>
		</div>
	);
}

export default CarouselComponent;
