import { loginApi, videoItemDetailsApi } from "../constants/apis"
import { ILoginCredentials, IVideoDetails } from "./payload-interface"
import Cookies from 'js-cookie'

export const login = async (loginDetails: ILoginCredentials) => {
    const options = {
        method: 'POST', 
        body: JSON.stringify(loginDetails)
    }
    const response = await fetch(loginApi, options);
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      return {isSuccess: true, errorMsg: ''};
    } else {
      return {isSuccess: false, errorMsg: data.error_msg};
    }
  };

  export const getVideos = async (api: string) => {
    const jwtToken = Cookies.get('jwt_token');
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`}
    };
    const response = await fetch(api, options);
    if (response.ok) {
      const data = await response.json();
      const responseData = data.videos.map((each: any) => ({
        id: each.id,
        name: each.channel ? each.channel.name : '',
        profileImg: each.channel ? each.channel.profile_image_url : '',
        publishedTime: each.published_at ? each.published_at : 'Watching Worldwide',
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }));
      return {isSuccess: true, responseData};
    } else {
      return {isSuccess: true, responseData: []};
    }

  };
  export const getVideoDetailedInfo = async (id?: string) => {
    const jwtToken = Cookies.get('jwt_token');
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`}
    };
    const response = await fetch(`${videoItemDetailsApi}${id}`, options);
    if (response.ok) {
      const data = await response.json();
      const videoDetails: IVideoDetails = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        name: data.video_details.channel ? data.video_details.channel.name : '',
        profileImg: data.video_details.channel ? data.video_details.channel.profile_image_url : '',
        subscriberCount: data.video_details.channel ? data.video_details.channel.subscriber_count : 0,
        publishedTime: data.video_details.published_at,
        viewCount: data.video_details.view_count,
        description: data.video_details.description
      };
      return {isSuccess: true, videoDetails};
    } else {
      return {isSuccess: true};
    }

  };