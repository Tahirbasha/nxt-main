import { loginApi, videoItemDetailsApi } from "../constants/apis"
import { ILoginCredentials, IVideoDetails, ILoginResponse, IVideosResponse, apiResponse } from "./payload-interface"
import Cookies from 'js-cookie'

/**
 * Login API call with proper error handling
 * @param loginDetails - User credentials
 * @returns Promise with login response including success status and error message
 */
export const login = async (loginDetails: ILoginCredentials): Promise<ILoginResponse> => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginDetails)
        };
        
        const response = await fetch(loginApi, options);
        
        // Check if response is ok before parsing JSON
        if (!response.ok) {
            // Try to parse error message from response
            try {
                const errorData = await response.json();
                return {
                    isSuccess: false,
                    errorMsg: errorData.error_msg || `Login failed with status ${response.status}`
                };
            } catch (parseError) {
                return {
                    isSuccess: false,
                    errorMsg: `Login failed with status ${response.status}. Please try again.`
                };
            }
        }
        
        const data = await response.json();
        
        // Validate that we received a JWT token
        if (data.jwt_token) {
            Cookies.set('jwt_token', data.jwt_token, { expires: 1 });
            return { isSuccess: true };
        } else {
            return {
                isSuccess: false,
                errorMsg: 'Invalid response from server. Please try again.'
            };
        }
    } catch (error) {
        // Handle network errors, timeout, etc.
        const errorMessage = error instanceof Error 
            ? error.message 
            : 'Network error. Please check your internet connection and try again.';
        
        return {
            isSuccess: false,
            errorMsg: errorMessage
        };
    }
};

/**
 * Fetch videos from API with proper error handling
 * @param api - API endpoint URL
 * @returns Promise with videos response including success status, data, and error message
 */
export const getVideos = async (api: string): Promise<IVideosResponse> => {
    try {
        const jwtToken = Cookies.get('jwt_token');
        
        // Check if JWT token exists
        if (!jwtToken) {
            return {
                isSuccess: false,
                responseData: [],
                errorMsg: 'Authentication required. Please login again.'
            };
        }
        
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        };
        
        const response = await fetch(api, options);
        
        // Handle HTTP errors
        if (!response.ok) {
            // Check if it's an authentication error
            if (response.status === 401 || response.status === 403) {
                // Clear invalid token
                Cookies.remove('jwt_token');
                return {
                    isSuccess: false,
                    responseData: [],
                    errorMsg: 'Session expired. Please login again.'
                };
            }
            
            // Try to parse error message
            try {
                const errorData = await response.json();
                return {
                    isSuccess: false,
                    responseData: [],
                    errorMsg: errorData.error_msg || `Failed to fetch videos. Status: ${response.status}`
                };
            } catch (parseError) {
                return {
                    isSuccess: false,
                    responseData: [],
                    errorMsg: `Failed to fetch videos. Status: ${response.status}`
                };
            }
        }
        
        const data = await response.json();
        
        // Validate response structure
        if (!data || !Array.isArray(data.videos)) {
            return {
                isSuccess: false,
                responseData: [],
                errorMsg: 'Invalid response format from server.'
            };
        }
        
        // Map response data to expected format
        const responseData = data.videos.map((each: any) => ({
            id: each.id,
            name: each.channel ? each.channel.name : '',
            profileImg: each.channel ? each.channel.profile_image_url : '',
            publishedTime: each.published_at ? each.published_at : 'Watching Worldwide',
            thumbnailUrl: each.thumbnail_url,
            title: each.title,
            viewCount: each.view_count,
        }));
        
        return {
            isSuccess: true,
            responseData
        };
    } catch (error) {
        // Handle network errors, timeout, etc.
        const errorMessage = error instanceof Error 
            ? error.message 
            : 'Network error. Please check your internet connection and try again.';
        
        return {
            isSuccess: false,
            responseData: [],
            errorMsg: errorMessage
        };
    }
};

/**
 * Fetch detailed video information with proper error handling
 * @param id - Video ID
 * @returns Promise with video details response including success status, data, and error message
 */
export const getVideoDetailedInfo = async (id?: string): Promise<apiResponse> => {
    try {
        // Validate video ID
        if (!id) {
            return {
                isSuccess: false,
                errorMsg: 'Video ID is required.'
            };
        }
        
        const jwtToken = Cookies.get('jwt_token');
        
        // Check if JWT token exists
        if (!jwtToken) {
            return {
                isSuccess: false,
                errorMsg: 'Authentication required. Please login again.'
            };
        }
        
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        };
        
        const response = await fetch(`${videoItemDetailsApi}${id}`, options);
        
        // Handle HTTP errors
        if (!response.ok) {
            // Check if it's an authentication error
            if (response.status === 401 || response.status === 403) {
                // Clear invalid token
                Cookies.remove('jwt_token');
                return {
                    isSuccess: false,
                    errorMsg: 'Session expired. Please login again.'
                };
            }
            
            // Check if video not found
            if (response.status === 404) {
                return {
                    isSuccess: false,
                    errorMsg: 'Video not found.'
                };
            }
            
            // Try to parse error message
            try {
                const errorData = await response.json();
                return {
                    isSuccess: false,
                    errorMsg: errorData.error_msg || `Failed to fetch video details. Status: ${response.status}`
                };
            } catch (parseError) {
                return {
                    isSuccess: false,
                    errorMsg: `Failed to fetch video details. Status: ${response.status}`
                };
            }
        }
        
        const data = await response.json();
        
        // Validate response structure
        if (!data || !data.video_details) {
            return {
                isSuccess: false,
                errorMsg: 'Invalid response format from server.'
            };
        }
        
        // Map response data to expected format
        const videoDetails: IVideoDetails = {
            id: data.video_details.id,
            title: data.video_details.title,
            videoUrl: data.video_details.video_url,
            thumbnailUrl: data.video_details.thumbnail_url,
            name: data.video_details.channel ? data.video_details.channel.name : '',
            profileImg: data.video_details.channel ? data.video_details.channel.profile_image_url : '',
            subscriberCount: data.video_details.channel ? data.video_details.channel.subscriber_count : '0',
            publishedTime: data.video_details.published_at || '',
            viewCount: data.video_details.view_count || '0',
            description: data.video_details.description || ''
        };
        
        return {
            isSuccess: true,
            videoDetails
        };
    } catch (error) {
        // Handle network errors, timeout, etc.
        const errorMessage = error instanceof Error 
            ? error.message 
            : 'Network error. Please check your internet connection and try again.';
        
        return {
            isSuccess: false,
            errorMsg: errorMessage
        };
    }
};