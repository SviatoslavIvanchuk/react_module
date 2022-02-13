export interface IMovieForTitle {
    map(arg0: (movie: any) => JSX.Element): import("react").ReactNode;
    id: number;
    title: string;
    vote_average: number;
    poster_path: string | null;
    overview: string | null;

}

export interface IMovieInfo {
    adult: boolean
    backdrop_path: string | null
    belongs_to_collection: null | object
    budget: number
    genres: [{
        id: number
        name: string
    }]
    production_companies: [{
        id: number
        logo_path: string
        name: string
        origin_country: string
    }]
    homepage: string | null
    id: number
    imdb_id: string | null
    original_language: string
    original_title: string
    overview: string | null
    popularity: number
    poster_path: string | null

    production_countries: [{
        iso_3166_1: string
        name: string
    }]
    release_date: string
    revenue: number
    runtime: number | null
    status: string
    tagline: string | null
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    videos: [{
        results: [{
            iso_639_1: string
            iso_3166_1: string
            name: string
            key: string
            site: string
            size: number
            type: string
            official: boolean
            published_at: string
            id: string
        }]
    }]
}