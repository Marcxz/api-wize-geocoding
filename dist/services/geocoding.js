"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geocoding = void 0;
const request = __importStar(require("request"));
class Geocoding {
    constructor() {
    }
    QueryGeocoding(address) {
        return __awaiter(this, void 0, void 0, function* () {
            let coordinates = { lat: -1, lng: -1 };
            try {
                coordinates = yield new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    const url_google = process.env.GOOGLE_API_URL;
                    const key = process.env.GOOGLE_API_KEY;
                    const url = `${url_google}?address=${address}&key=${key}`;
                    request.get(url, undefined, (error, response, body) => __awaiter(this, void 0, void 0, function* () {
                        let tmp_coordinates = { lat: -1, lng: -1 };
                        if (error) {
                            console.log(error);
                            resolve(tmp_coordinates);
                        }
                        else {
                            try {
                                const geoResult = JSON.parse(body);
                                if (geoResult.results.length > 0) {
                                    tmp_coordinates.lat = geoResult.results[0].geometry.location.lat;
                                    tmp_coordinates.lng = geoResult.results[0].geometry.location.lng;
                                }
                            }
                            catch (error) {
                                console.log(error);
                            }
                        }
                        resolve(tmp_coordinates);
                    }));
                }));
                return coordinates;
            }
            catch (error) {
                return coordinates;
            }
        });
    }
}
exports.Geocoding = Geocoding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvZ2VvY29kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFFbkMsTUFBYSxTQUFTO0lBQ2xCO0lBQ0EsQ0FBQztJQUVLLGNBQWMsQ0FBQyxPQUFlOztZQUNoQyxJQUFJLFdBQVcsR0FBaUIsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFDbEQsSUFBSTtnQkFDQSxXQUFXLEdBQUcsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFPLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtvQkFDdEQsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7b0JBQzlDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO29CQUN2QyxNQUFNLEdBQUcsR0FBRyxHQUFHLFVBQVUsWUFBWSxPQUFPLFFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFPLEtBQVMsRUFBRSxRQUFhLEVBQUUsSUFBUyxFQUFFLEVBQUU7d0JBQ3RFLElBQUksZUFBZSxHQUFpQixFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQzt3QkFDdkQsSUFBSSxLQUFLLEVBQUU7NEJBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDbkIsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3lCQUM1Qjs2QkFDSTs0QkFDRCxJQUFJO2dDQUNBLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ25DLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29DQUM5QixlQUFlLENBQUMsR0FBRyxHQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7b0NBQ2xFLGVBQWUsQ0FBQyxHQUFHLEdBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztpQ0FDckU7NkJBRUo7NEJBQUMsT0FBTyxLQUFLLEVBQUU7Z0NBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs2QkFDdEI7eUJBQ0o7d0JBQ0csT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUNqQyxDQUFDLENBQUEsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQSxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxXQUFXLENBQUM7YUFDdEI7WUFDRCxPQUFNLEtBQUssRUFBRTtnQkFDVCxPQUFPLFdBQVcsQ0FBQzthQUN0QjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBdENELDhCQXNDQyJ9