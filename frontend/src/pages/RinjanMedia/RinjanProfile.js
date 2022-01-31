import React from 'react';
import Footer from '../../components/RinjanMedia/Footer/Footer';
import Carousel from '../../components/RinjanMedia/Profile/Carousel/Carousel';
import Testimonials from '../../components/RinjanMedia/Profile/Testimonials/Testimonials';
import VisiMisi from '../../components/RinjanMedia/Profile/VisiMisi/VisiMisi';
import TopBar from '../../components/RinjanMedia/TopBar/TopBar';

const RinjanProfile = () => {
	return (
		<>
			<TopBar/>
			<Carousel/>
			<VisiMisi/>
			<Testimonials/>
			<Footer/>
		</>
	)
	
}

export default RinjanProfile
