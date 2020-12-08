require(`dotenv`).config({
	path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
	siteMetadata: {
		// You can overwrite values here that are used for the SEO component
		// Of course you can also add new values here to query them like usual
		// See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
		siteTitleAlt: `Клуб любителей цирка в городе Орле`,
		siteTitle: `Клуб любителей цирка`,
		siteHeadline: `Клуб любителей цирка в городе Орле`,
		siteUrl: `https://circusclub.ru`,
		siteDescription: `Клуб любителей цирка в городе Орле приглашает детей и взрослых провести досуг`,
		siteLanguage: `ru`,
		siteImage: `/logo.png`,
		author: `@alexa_905`,
	},
	plugins: [
		{
			resolve: `@lekoarts/gatsby-theme-cara`,
			// See the theme's README for all available options
			options: {},
		},
		{
			resolve: `gatsby-plugin-gtag`,
			options: {
				// your google analytics tracking id
				trackingId: `G-28HY67FMWS`,
				// Puts tracking script in the head instead of the body
				head: false,
				// enable ip anonymization
				anonymize: true,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`pacifico\:400`,// you can also specify font weights and styles
					`lobster\:400` // you can also specify font weights and styles
				],
				display: 'swap'
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg'
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Клуб любителей цирка в городе Орле`,
				short_name: `Цирк`,
				description: `Клуб любителей цирка в городе Орле`,
				start_url: `/`,
				background_color: `#141821`,
				theme_color: `#f6ad55`,
				display: `standalone`,
				icons: [
					{
						src: `/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`,
					},
				],
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-netlify`,
		shouldAnalyseBundle && {
			resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
			options: {
				analyzerMode: `static`,
				reportFilename: `_bundle.html`,
				openAnalyzer: false,
			},
		},
	].filter(Boolean),
}
