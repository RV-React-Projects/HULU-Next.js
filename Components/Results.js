import ThumbNail from './ThumbNail';

function Results({ Results }) {
	return (
		<div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center ">
			{Results.map((result) => <ThumbNail key={result.id} result={result} />)}
		</div>
	);
}

export default Results;
