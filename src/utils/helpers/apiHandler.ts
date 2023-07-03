

// import { PROJECTS } from "../const";

// const DEFAULT_METHOD = 'GET'
// const DEFAULT_CONTENT_TYPE = 'application/json'

// interface FetchProps {
//     urlAPI: string | undefined,
//     endpointName: string,
//     method?: 'POST' | 'GET' | 'PUT' | 'DELETE',
//     content?: null | object | [],
//     authorization?: string | null,
//     contentType?: 'multipart/form-data' | 'application/json',
//     fnRefreshToken?: () => Promise<void>,
// }

// export const Fetch = async ({
//     urlAPI = PROJECTS,
//     endpointName,
//     method = DEFAULT_METHOD,
//     content = null,
//     authorization = '',
//     contentType = DEFAULT_CONTENT_TYPE,
//     fnRefreshToken,
// }: FetchProps): Promise<any> => {

//     if (authorization && !fnRefreshToken) throw new Error('fnRefreshToken is required when authorization is provided');

//     let body: any;
//     if (method !== DEFAULT_METHOD) {
//         body = contentType === DEFAULT_CONTENT_TYPE ? JSON.stringify(content) : content
//     } else body = null

//     const config: RequestInit = {
//         method,
//         headers: {
//             'Authorization': `Bearer ${authorization}`,
//             'Content-Type': contentType
//         },
//         body
//     }

//     try {
//         const response = await fetch(`${urlAPI}${endpointName}`, config);
//         const data = await response.json();
//         if (response.status === 201 || response.status === 200) {
//             return data
//         } else if (response.status === 401 && fnRefreshToken) {
//             const res: any = await fnRefreshToken();
//             return await Fetch({ urlAPI, endpointName, method, content, authorization: res.jwtToken, contentType, fnRefreshToken });
//         }
//         return await Promise.reject(data)
//     } catch (error) {
//         return await Promise.reject(error)
//     }
// }
