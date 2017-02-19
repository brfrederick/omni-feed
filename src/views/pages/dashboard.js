import { h } from 'preact';
import Card from 'Components/card';

export default function (props) {
	return (
		<div className="page page__dashboard">
			<Card>
				<h1>Dashboard</h1>
				<p>This is the users dashboard!</p>
			</Card>

			<Card>
				<h2>Features:</h2>
				<ul>
					<li>Offline Caching (via `serviceWorker`)</li>
					<li>SASS & Autoprefixer</li>
					<li>Asset Versioning (aka "cache-busting")</li>
					<li>ES2015 (ES6) and ES2016 (ES7) support</li>
					<li>Webpack Bundle Analysis (via `webpack-dashboard`)</li>
					<li>Hot Module Replacement (HMR) for all files</li>
					<li>Preact Developer Tools</li>
					<li><a href="https://github.com/GoogleChrome/lighthouse" target="_blank" rel="noopener">Lighthouse</a> approved (100/100)</li>
				</ul>
			</Card>
		</div>
	);
}
