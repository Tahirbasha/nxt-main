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
export interface IVideoDetails {
    id: string;
    title: string;
    videoUrl: string;
    thumbnailUrl: string;
    name: string;
    profileImg: string;
    subscriberCount: string;
    publishedTime: string;
    viewCount: string;
    description: string;
}

export interface apiResponse {
    isSuccess: boolean;
    videoDetails?: IVideoDetails;
    errorMsg?: string;
}

export interface IVideosResponse {
    isSuccess: boolean;
    responseData: IVideo[];
    errorMsg?: string;
}

export interface ILoginResponse {
    isSuccess: boolean;
    errorMsg?: string;
}