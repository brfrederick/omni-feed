import { h } from 'preact';
import { Link } from 'preact-router';

export default function () {
	return (
		<header className="header">
			<h1>OMNI Feed</h1>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/dashboard">Dashboard</Link>
			</nav>
		</header>
	)
}
