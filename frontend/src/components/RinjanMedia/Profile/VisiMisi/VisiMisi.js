import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import ellipse from '../../../../assets/img/ellipse.svg'
import Image from '../../../../assets/img/undraw3.png'

export default function VisiMisi() {
	return (
		<div>
			<Container>
				<Row className='d-flex align-items-center mb-5'>
					<Col sm={6}>
						<h1><strong>Visi</strong> dan Misi</h1>
						<Row className='mt-5'>
							<Col sm={2}>
								<img src={ellipse} alt='alt' className='img-fluid'/>
							</Col>
							<Col>
								<h3><strong>Visi</strong></h3>
								<p>Menjadi platform bisnis digital terkemuka di Indonesia</p>
							</Col>
						</Row>
						<Row className='mt-5'>
							<Col sm={2}>
								<img src={ellipse} alt='alt' className='img-fluid'/>
							</Col>
							<Col>
								<h3><strong>Misi</strong></h3>
								<ul>
									<li>Memberikan edukasi kepada masyarakat tentang sistem digital.</li>
									<li>Menjadi mitra bisnis yang andal demi membangun bersama pelaku bisnis.</li>
									<li>Meningkatkan pengetahuan dan keterampilan dalam bidang teknologi informasi dan komunikasi kepada masyarakat.</li>
								</ul>
							</Col>
						</Row>
					</Col>
					<Col sm={6} className='text-center'>
						<img src={Image} alt='alt' className='img-fluid'/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
