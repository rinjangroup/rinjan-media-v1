import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Img from '../../../../assets/img/undraw_team.png'

export default function Carousel() {
	return (
		<div className='pt-3 my-5'>
			<Container fluid className='bg-linear-gradient-semi-primary py-5'>
				<Container>
					<Row className='d-flex align-items-center'>
						<Col>
							<h1 className='text-primary'><strong>Rinjan</strong> Team</h1>
							<p>  Membangun, melihat peluang bisnis dan mengembangkan Sumber Daya Manusia yang kreatif, inovatif, dan berakhlak mulia untuk mempersiapkan dunia bisnis digital yang berbasis pada kebutuhan masyarakat</p>
						</Col>
						<Col className='text-center'>
							<img src={Img} alt='alt' className='img-fluid'/>
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	)
}
