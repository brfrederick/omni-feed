import { h } from 'preact';
import { Link } from 'preact-router';
import Card from 'Components/card';

export default function (props) {
	return (
		<div className="page page__home">
			<Card>
				<h1>Home</h1>
				<p>This is the home page.</p>

				<p>You should check out:</p>
				<nav>
					<Link href="/foo">Foo</Link>
					<Link href="/foo/bar">Foo/Bar</Link>
				</nav>
			</Card>
		</div>
	);
}
