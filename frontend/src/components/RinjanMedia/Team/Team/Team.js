import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Vektor1 from '../../../../assets/img/vektor1.png'
import Vektor2 from '../../../../assets/img/vektor2.png'
import Vektor3 from '../../../../assets/img/vektor3.png'


export default function Team() {
	const dataTeams = [
		{
			img: Vektor1,
			name: 'Nurul Jalal',
			position: 'CEO'
		},
		{
			img: Vektor2,
			name: 'Putri Mulyansari',
			position: 'CTO & Account Executive'
		},
		{
			img: Vektor3,
			name: 'Nurkholis Majid',
			position: 'Graphic Designer & Copywriter'
		},
		{
			img: Vektor1,
			name: 'Ilham Anas',
			position: 'Programmer'
		},
		{
			img: Vektor3,
			name: 'Rubi Anggoro',
			position: 'Programmer'
		},
		{
			img: Vektor1,
			name: 'Mahmudin',
			position: 'Direktur Utama'
		}
	]
	return (
		<>
			<Container className='mb-5'>
				<Row>
					<Col className='text-center'>
						<h1 className='text-primary'>WE ARE A YOUNG, CREATIVE AND RELIGIOUS TEAM</h1>
						<h1>See Our Team</h1>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
				{dataTeams.length !== 0 && dataTeams.map((val, idx) => {
					return (
						<Col sm={4} className='text-center'>
							<img src={val.img} alt='alt'  width={312} height={209}/>
							<h3 className='mt-2'>{val.name}</h3>
							<p>{val.position}</p>
						</Col>
					)
				})}
				</Row>
			</Container>
			<Container className='mt-5'>
				<Row>
					<Col className='text-center'>
						<h1><strong>You Are Investor ?</strong></h1>
						<Button variant='warning' className='rounded-pill px-4'><strong>JOIN NOW</strong></Button>
					</Col>
				</Row>
			</Container>
		</>
	)
}
