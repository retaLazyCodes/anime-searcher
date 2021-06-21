const fetchAnime = async (query) => {
    const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=30`)
        .then(res => res.json());

    return (res.results);
}

export default fetchAnime;