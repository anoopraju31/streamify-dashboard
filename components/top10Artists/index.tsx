import React, { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import numeral from 'numeral'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type TopArtist = {
	rank: number
	name: string
	streams: number
	profileImage: string
	fallback: string
	song: string
}

export const topArtists: TopArtist[] = [
	{
		rank: 1,
		name: 'The Weeknd',
		streams: 560000,
		profileImage: '/01.png',
		fallback: 'TW',
		song: 'Blinding Lights'
	},
	{
		rank: 2,
		name: 'Ed Sheeran',
		streams: 530000,
		profileImage: '/02.png',
		fallback: 'ES',
		song: 'Shape of You'
	},
	{
		rank: 3,
		name: 'Taylor Swift',
		streams: 510000,
		profileImage: '/03.png',
		fallback: 'TS',
		song: 'Anti-Hero'
	},
	{
		rank: 4,
		name: 'Drake',
		streams: 490000,
		profileImage: '/04.png',
		fallback: 'D',
		song: "God's Plan"
	},
	{
		rank: 5,
		name: 'Dua Lipa',
		streams: 470000,
		profileImage: '/05.png',
		fallback: 'DL',
		song: 'Levitating'
	},
	{
		rank: 6,
		name: 'Bad Bunny',
		streams: 450000,
		profileImage: '/03.png',
		fallback: 'BB',
		song: 'Dakiti'
	},
	{
		rank: 7,
		name: 'Justin Bieber',
		streams: 440000,
		profileImage: '/02.png',
		fallback: 'JB',
		song: 'Peaches'
	},
	{
		rank: 8,
		name: 'Billie Eilish',
		streams: 420000,
		profileImage: '/01.png',
		fallback: 'BE',
		song: 'Bad Guy'
	},
	{
		rank: 9,
		name: 'Ariana Grande',
		streams: 410000,
		profileImage: '/04.png',
		fallback: 'AG',
		song: '7 rings'
	},
	{
		rank: 10,
		name: 'Post Malone',
		streams: 400000,
		profileImage: '/05.png',
		fallback: 'PM',
		song: 'Circles'
	}
]

const TopArtistCard: FC<TopArtist> = ({ name, streams, profileImage, fallback }) => {
	return (
		<div className='flex items-center'>
			<Avatar className='h-9 w-9'>
				<AvatarImage src={profileImage} alt='Avatar' />
				<AvatarFallback>{fallback}</AvatarFallback>
			</Avatar>
			<div className='ml-4 space-y-1'>
				<p className='text-sm font-medium leading-none'>{name}</p>
				<p className='text-sm text-muted-foreground'>Artist</p>
			</div>
			<div className='ml-auto font-medium'>{numeral(streams).format('0a')}+</div>
		</div>
	)
}

const Top10Artists: FC = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Top Artists</CardTitle>
				<CardDescription>Top 10 artists of this month.</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='space-y-4'>
					{topArtists.map((artist) => (
						<TopArtistCard key={artist.rank} {...artist} />
					))}
				</div>
			</CardContent>
		</Card>
	)
}

export default Top10Artists
