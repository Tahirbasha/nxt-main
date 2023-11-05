import { homepageApi, loginApi } from "../constants/apis"
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

  export const getHomePageVideos = async (searchBy?: string) => {
    const jwtToken = Cookies.get('jwt_token');
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`}
    };
    const response = await fetch(homepageApi, options);
    if (response.ok) {
      const data = await response.json();
      const homePageData = data.videos.map((each: any) => ({
        id: each.id,
        name: each.channel.name,
        profileImg: each.channel.profile_image_url,
        publishedTime: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }));
      return {isSuccess: true, homePageData};
    } else {
      return {isSuccess: true, homePageData: []};
    }

  };