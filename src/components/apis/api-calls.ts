import { loginApi, videoItemDetailsApi } from "../constants/apis"
import { ILoginCredentials } from "./payload-interface"
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

  export const getVideos = async (api: string, searchBy?: string) => {
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
      const responseData = {
        id: data.id,
        title: data.title,
        videoUrl: data.video_url,
        thumbnailUrl: data.thumbnail_url,
        name: data.channel ? data.channel.name : '',
        profileImg: data.channel ? data.channel.profile_image_url : '',
        subscriberCount: data.channel ? data.channel.subscriber_count : 0,
        publishedTime: data.published_at,
        viewCount: data.view_count,
        description: data.description
      };
      return {isSuccess: true, responseData};
    } else {
      return {isSuccess: true, responseData: null};
    }

  };