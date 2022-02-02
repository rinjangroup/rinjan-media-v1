import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from '../../../../assets/img/undraw4.png'
import Testi1 from '../../../../assets/img/testi1.png'
import Testi2 from '../../../../assets/img/testi2.png'
import Testi3 from '../../../../assets/img/testi3.png'
import TextInputEmail from '../../../TextInputEmail/TextInputEmail';

export default function Testimonials() {
	const dataTesti = [
		{
			img: Testi1,
			project: 'Harian Pelita Sejahtera',
			desc: 'HARIANPELITA.Id lahir sebagai marwah Harian Umum Pelita (Koran Cetak) yang  sejak lama dikenal sebagai “Moeslem Oriented Newspaper”.  Julukan itu masih dipegang oleh berbagai kalangan di luar negeri hingga saat ini.'
		},
		{
			img: Testi2,
			project: 'MA Nurul Falah Ciater',
			desc: 'Peran madrasah dalam pembangunan, khususnya di bidang pendidikan sangat strategis. Keberadaannya di pelosok-pelosok pemukiman memungkinkan warga menyekolahkan anaknya guna mendapatkan pendidikan. Selain pendidikan formal, madrasah pun memberikan bekal pengetahuan agama yang membentuk watak beriman dan bertaqwa kepada Tuhan Yang Maha Esa. Untuk itu, keberadaannya di tengah masyarakat sangat dibutuhkan guna mendukung akselerasi peningkatan kualitas sumberdaya manusia.'
		},
		{
			img: Testi3,
			project: 'MTs Nurul Falah Ciater',
			desc: 'MTs Nurul Falah Ciater adalah sekolah menengah pertama yang berbasis pendidikan agama islam dalam mendidik para siswa dan siswinya. Dibawah naungan kementrian agama MTs Nurul Falah memiliki visi misi mencerdaskan anak-anak bangsa yang menumbuhkan sikap cerdas dan religius.'
		}
	]
	return (
		<>
			<Container fluid className='bg-linear-gradient-primary'>
				<Container>
					<Row className='d-flex align-items-center py-5'>
						<Col sm={3}>
							<img src={Image} alt='alt'/>
						</Col>
						<Col className='text-light'>
							<h1><strong>Dipercaya</strong></h1>
							<h1>Pelanggan di Seluruh Indonesia</h1>
						</Col>
					</Row>
					<Row>
						{dataTesti.length !== 0 && dataTesti.map((val, idx) => {
							return (
								<Col sm={4} xs={12} className='text-light'>
									<img src={val.img} alt='alt' className='img-fluid'/>
									<h2><strong>{val.project}</strong></h2>
									<p className='mb-5'>{val.desc}</p>
								</Col>
							)
						})}
					</Row>
				</Container>
			</Container>

			<TextInputEmail/>
		</>
	);
}
