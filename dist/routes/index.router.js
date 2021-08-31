"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const http_status_codes_1 = require("http-status-codes");
const geocoding_1 = require("../services/geocoding");
const geocoding = new geocoding_1.Geocoding();
const router = express.Router();
router.get('/helloWorld', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(http_status_codes_1.StatusCodes.OK).send("Hello world Go Bootcamp");
    }
    catch (error) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send("There is an internal Error. Try later");
    }
}));
router.get('/GeocodeAddress/:address', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.params.address) {
            let coordinates = yield geocoding.QueryGeocoding(req.params.address);
            if (coordinates.lat !== -1) {
                res.status(http_status_codes_1.StatusCodes.OK).send(coordinates);
            }
            else {
                res.status(http_status_codes_1.StatusCodes.OK).send("There isnt a coordinate with that address. Try again");
            }
        }
        else {
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send("Bad Request. You should type an address to geocode");
        }
    }
    catch (error) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send("Internal Error Api");
    }
}));
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL2luZGV4LnJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbUNBQW9DO0FBQ3BDLHlEQUE4QztBQUM5QyxxREFBZ0U7QUFDaEUsTUFBTSxTQUFTLEdBQWMsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFFN0MsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUMvQyxJQUFJO1FBQ0EsR0FBRyxDQUFDLE1BQU0sQ0FBQywrQkFBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0tBQzlEO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDWixHQUFHLENBQUMsTUFBTSxDQUFDLCtCQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQztLQUMvRjtBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUM1RCxJQUFJO1FBQ0EsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLFdBQVcsR0FBRyxNQUFNLFNBQVMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyRSxJQUFHLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLEdBQUcsQ0FBQyxNQUFNLENBQUMsK0JBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQywrQkFBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO2FBQzNGO1NBQ0o7YUFBTTtZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsK0JBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsb0RBQW9ELENBQUMsQ0FBQztTQUNsRztLQUNKO0lBQUMsT0FBTSxLQUFLLEVBQUU7UUFDWCxHQUFHLENBQUMsTUFBTSxDQUFDLCtCQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztLQUM1RTtBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxpQkFBUyxNQUFNLENBQUMifQ==