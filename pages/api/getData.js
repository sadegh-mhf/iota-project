import http from '/services/http.service';

export async function getFirstSliderData(url) {
    try {
        const response = await http.get(url);
        return response.data
    } catch (e) {
        return Promise.reject(e);
    }
}