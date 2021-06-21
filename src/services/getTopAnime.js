const getTopAnime = async () => {
    const res = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        .then(res => res.json());

    return (res.top.slice(0, 5));
}

export default getTopAnime;