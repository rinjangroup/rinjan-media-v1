import React, { useEffect } from 'react';
import AOS from 'aos';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Jalal from '../../../../assets/team/jalal.png'
import Putri from '../../../../assets/team/putri.png'
import Kholis from '../../../../assets/team/kholis.png'
import Ilham from '../../../../assets/team/ilham.png'
import Rubi from '../../../../assets/team/rubi.png'
import Faisal from '../../../../assets/team/faisal.png'
import PakMahmud from '../../../../assets/team/pakmahmud.jpg'
import Bima from '../../../../assets/team/bima.png'




export default function Team() {

	useEffect(() => {
		AOS.init({ duration : 1000 });
		AOS.refresh()
	  }, []);

	const dataTeams = [
		{
			img: Jalal,
			name: 'Nurul Jalal',
			position: 'CEO'
		},
		{
			img: Ilham,
			name: 'Putri Mulyansari',
			position: 'CTO'
		},
		{
			img: Bima,
			name: 'Bima Jayusman',
			position: 'CFO'
		},
		{
			img: Kholis,
			name: 'Nurkholis Majid',
			position: 'Graphic Designer & Copywriter'
		},
		{
			img: Rubi,
			name: 'Rubi Anggoro',
			position: 'Programmer'
		},
		{
			img: Faisal,
			name: 'Ahmad Faisal',
			position: 'Marketing'
		},
		{
			img: PakMahmud,
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
						<Col sm={4} className='text-center p-5' data-aos="fade-down">
							<img src={val.img} alt='alt' className='img-fluid shadow p-3 mb-5 bg-body rounded-pill img-team'/>
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
