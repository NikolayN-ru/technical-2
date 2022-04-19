export const getLatestNews = async () => {
	const request = await fetch('https://swapi.dev/api/people/')
	return await request.json();
}