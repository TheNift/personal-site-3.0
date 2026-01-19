import Page from '@components/Page';
import ScrambleText from '@components/ScrambleText';
import { Link } from 'react-router';
function NotFound() {
	return (
		<Page className="flex flex-col items-center justify-center p-4">
			<h1 className="text-[50px] leading-[50px] sm:text-[75px] sm:leading-[75px] lg:text-[100px] lg:leading-[100px] text-yorha font-doto tracking-tighter font-[800] mb-4">
				<ScrambleText scramble={8} preventLayoutShift>
					404
				</ScrambleText>
			</h1>
			<p className="text-yorha/60 text-sm sm:text-md font-medium">
				<ScrambleText scramble={10} preventLayoutShift>
					Try going
				</ScrambleText>{' '}
				<Link
					to="/"
					className="text-yorha hover:text-yorha/80 underline"
				>
					<ScrambleText scramble={10} preventLayoutShift>
						home
					</ScrambleText>
				</Link>
				!
			</p>
		</Page>
	);
}

export default NotFound;
