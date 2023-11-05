export interface ILoginCredentials {
    username: string,
    password: string
}

export interface IVideo {
    id: number,
    title: string,
    thumbnailUrl: string,
    viewCount: string,
    name?: string,
    profileImg?: string,
    publishedTime?: string,
}