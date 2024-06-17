import api from "./api"


export const tokenApis = {
    getAccessToken: async (refreshToken: string) => api.post('/api/token', {
        refreshToken: refreshToken
    }),
}