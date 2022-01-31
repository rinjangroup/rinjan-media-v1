import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Image from '../../../../assets/img/undraw2.png'

export default function Carousel() {
	return (
		<div className='pt-3 my-5'>
			<Container fluid className='bg-linear-gradient-primary'>
				<Container className='py-5'>
					<Row className='d-flex align-items-center'>
						<Col sm={6} className='text-light'>
							<h4>Tentang Kami</h4>
							<h1><strong>RInjan</strong> Media</h1>
							<p>   Rinjan Media merupakan platform yang dibangun dari kolaborasi-kolaborasi proyek bisnis pemuda kreatif sejak tahun 2018, karena dibentuk oleh pemuda dari organisasi Remaja Islam Nurul Jannah (Rinjan) yang memiliki kreatifitas dan potensi dalam melihat peluang bisnis didunia digital maka dibangun sebuah Media untuk mewujudkan sebuah impian menjadi kenyataan</p>
						</Col>
						<Col sm={6}>
							<img src={Image} alt='alt' className='img-fluid'/>
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
}
