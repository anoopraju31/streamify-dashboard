'use client'

import { type FC } from 'react'
import { TrendingUp } from 'lucide-react'
import { Area, AreaChart, XAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: 'hsl(var(--chart-1))'
	},
	mobile: {
		label: 'Mobile',
		color: 'hsl(var(--chart-2))'
	}
} satisfies ChartConfig

type UserData = {
	date: string
	activeUsers: number
	totalUsers: number
}

function generateMockUserData(days: number = 365): UserData[] {
	const today = new Date()
	let totalUsers = Math.floor(Math.random() * (10000 - 5000) + 5000) // Initial user base
	const userData: UserData[] = []

	for (let i = days - 1; i >= 0; i--) {
		const date = new Date()
		date.setDate(today.getDate() - i)
		const dayOfWeek = date.getDay() // 0 (Sunday) to 6 (Saturday)

		const newUsers = Math.floor(Math.random() * (200 - 50) + 50) // Daily new users
		totalUsers += newUsers

		// Define realistic active user range based on weekday/weekend
		const activeUserPercentage =
			dayOfWeek === 0 || dayOfWeek === 6
				? Math.random() * (0.5 - 0.3) + 0.3 // 30-50% for weekends
				: Math.random() * (0.7 - 0.5) + 0.5 // 50-70% for weekdays

		// Active users follow a rolling trend, avoiding extreme fluctuations
		const activeUsers = Math.floor(totalUsers * activeUserPercentage)

		userData.push({
			date: date.toISOString().split('T')[0], // Format YYYY-MM-DD
			activeUsers,
			totalUsers
		})
	}

	return userData
}

type AggregatedData = {
	period: string
	averageActiveUsers: number
	totalUsers: number
}

// Helper function to get the week number of the year
function getWeekNumber(date: Date): number {
	const firstJan = new Date(date.getFullYear(), 0, 1)
	const diffDays = Math.floor((date.getTime() - firstJan.getTime()) / (1000 * 60 * 60 * 24))
	return Math.ceil((diffDays + firstJan.getDay() + 1) / 7)
}

function aggregateData(data: UserData[], period: 'weekly' | 'monthly' | '3months'): AggregatedData[] {
	const aggregated: AggregatedData[] = []
	let tempActiveUsers: number[] = []
	let lastTotalUsers = 0
	let currentPeriod = ''

	for (let i = 0; i < data.length; i++) {
		const entry = data[i]
		const date = new Date(entry.date)

		let periodLabel = ''

		if (period === 'weekly') {
			const week = getWeekNumber(date)
			periodLabel = `${date.getFullYear()}-W${week}`
		} else if (period === 'monthly') {
			periodLabel = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`
		} else if (period === '3months') {
			const quarter = Math.floor(date.getMonth() / 3) + 1
			periodLabel = `${date.getFullYear()}-Q${quarter}`
		}

		if (periodLabel !== currentPeriod) {
			// Save the previous period's data
			if (tempActiveUsers.length > 0) {
				aggregated.push({
					period: currentPeriod,
					averageActiveUsers: Math.round(
						tempActiveUsers.reduce((sum, val) => sum + val, 0) / tempActiveUsers.length
					),
					totalUsers: lastTotalUsers
				})
			}

			// Reset for new period
			currentPeriod = periodLabel
			tempActiveUsers = []
		}

		tempActiveUsers.push(entry.activeUsers)
		lastTotalUsers = entry.totalUsers // Keep the latest total users count
	}

	// Add last period's data
	if (tempActiveUsers.length > 0) {
		aggregated.push({
			period: currentPeriod,
			averageActiveUsers: Math.round(tempActiveUsers.reduce((sum, val) => sum + val, 0) / tempActiveUsers.length),
			totalUsers: lastTotalUsers
		})
	}

	return aggregated
}

const UserGrowthChart: FC = () => {
	const data = generateMockUserData(365)
	const formatedData = aggregateData(data, 'monthly')

	return (
		<Card>
			<CardHeader>
				<CardTitle>Area Chart - Stacked</CardTitle>
				<CardDescription>Showing total visitors for the last 6 months</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<AreaChart
						accessibilityLayer
						data={formatedData}
						margin={{
							left: 12,
							right: 12
						}}
					>
						<XAxis
							dataKey='period'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent indicator='dot' />} />
						<Area
							dataKey='totalUsers'
							type='natural'
							fill='var(--color-mobile)'
							fillOpacity={0.4}
							stroke='var(--color-mobile)'
							stackId='a'
						/>
						<Area
							dataKey='averageActiveUsers'
							type='natural'
							fill='var(--color-desktop)'
							fillOpacity={0.4}
							stroke='var(--color-desktop)'
							stackId='a'
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className='flex w-full items-start gap-2 text-sm'>
					<div className='grid gap-2'>
						<div className='flex items-center gap-2 font-medium leading-none'>
							Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
						</div>
						<div className='flex items-center gap-2 leading-none text-muted-foreground'>
							January - June 2024
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}

export default UserGrowthChart
