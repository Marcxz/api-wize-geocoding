import * as request from 'request';

export class Geocoding {
    constructor() {
    }
    
    async QueryGeocoding(address: string): Promise<ICoordinates> {
        let coordinates: ICoordinates = {lat:-1, lng: -1};
        try {
            coordinates = await new Promise(async (resolve, reject) => {
                const url_google = process.env.GOOGLE_API_URL;
                const key = process.env.GOOGLE_API_KEY;
                const url = `${url_google}?address=${address}&key=${key}`;
                request.get(url, undefined, async (error:any, response: any, body: any) => {
                    let tmp_coordinates: ICoordinates = {lat: -1, lng: -1};
                    if (error) {
                        console.log(error);
                        resolve(tmp_coordinates);
                    }
                    else {
                        try {
                            const geoResult = JSON.parse(body);
                            if (geoResult.results.length > 0) {
                                tmp_coordinates.lat =  geoResult.results[0].geometry.location.lat;
                                tmp_coordinates.lng =  geoResult.results[0].geometry.location.lng;
                            }
                            
                        } catch (error) {
                            console.log(error);
                        }
                    }
                        resolve(tmp_coordinates);
                });
            });
            return coordinates;
        }
        catch(error) {
            return coordinates;
        }
    }
}

export interface ICoordinates {
    lat: number,
    lng: number
}