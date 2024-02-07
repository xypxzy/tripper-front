import Hero from '@/components/common/Hero/Hero'
import TopFlights from '@/components/shared/TopFlights/TopFlights'
import { Locale } from '@/i18n'
import getTranslation from '@/lib/i18n/getTranslation'

type Props = {
	params: { locale: Locale }
}

export default async function Home({ params }: Props) {
	const translation = await getTranslation(params.locale)

	return (
		<>
			<Hero
				title={translation('hero.home-title')}
				preTitle={translation('hero.home-desc')}
			/>
			<TopFlights />
		</>
	)
}