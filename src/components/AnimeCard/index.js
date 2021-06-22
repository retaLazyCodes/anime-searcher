import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'wouter'
import './styles.css'


export default function AnimeCard({ mal_id, title, image_url }) {
	return (
		// <article className="card">
		// 	<figure >
		// 		<Link to={`/anime/${mal_id}`}>
		// 			<Image
		// 				className="card-image"
		// 				src={image_url}
		// 				alt="anime pic"
		// 				style={{ cursor: 'pointer' }}
		// 				loading='lazy'
		// 				width="250w"
		// 				height="300w"
		// 			/>
		// 		</Link>
		// 	</figure>
		// </article >

		<div className="card">
			<Card className="card-style" style={{ flex: 1 }}>
				<Card.Img
					className="card-image"
					src={image_url}
					alt="Card image pic" />
				<Card.Body className="card--content">
					<Card.Title className="card--content--title">{title}</Card.Title>
					<Button className="card--content--details"><Link to={`/anime/${mal_id}`}>DETAILS</Link></Button>
					<Card.Footer className="card--content--footer">
						<div>Anime.type</div>
						<div>Anime.start_date</div>
					</Card.Footer>
				</Card.Body>
			</Card>
		</div>

	)
}

