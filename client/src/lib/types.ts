export type Source = {
    media?: string;
    src: string;
    mime: string;
};

export type Track = {
    kind: string;
    src: string;
    lang: string;
    label: string;
};

export type Video = {
    srcset: Source[];
    tracks: Track[];
    title?: string;
    poster?: string;
}; 

export type Picture = {
    srcset: Source[];
    title?: string;
};

export type Anime = {
    video?: Video;
    image: Picture;
    name: string,
    seasons: number;
    episodes: number;
};
