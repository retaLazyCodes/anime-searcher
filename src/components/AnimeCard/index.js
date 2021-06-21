import React from 'react'
import { Link } from 'wouter'


export default function AnimeCard({ mal_id, title, image_url }) {
	return (
		<article className="anime-card">
			<figure>
				<Link to={`/anime/${mal_id}`}>
					<img
						src={image_url}
						alt="anime pic"
						style={{ cursor: 'pointer' }}
						loading='lazy'
					/>
				</Link>
			</figure>
			<h3>{title}</h3>
		</article>
	)
}

