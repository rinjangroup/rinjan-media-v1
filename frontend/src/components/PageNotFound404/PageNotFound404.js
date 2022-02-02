import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Image from '../../assets/img/not_found.svg'

export default function PageNotFound404() {
	return (
		<div>
			<Container className='text-center'>
				<img src={Image} alt='page not found' className='img-fluid'/>
				<h1 className='mt-5'>Untuk Saat Ini Masih dalam Pengembangan</h1>
				<h2>Terima kasih :)</h2>
			</Container>
		</div>
	);
}
