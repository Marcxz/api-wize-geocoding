import express = require('express');
import {StatusCodes} from 'http-status-codes';
import { Geocoding, ICoordinates } from '../services/geocoding';
const geocoding: Geocoding = new Geocoding();

const router = express.Router();
router.get('/helloWorld', async (req, res, next) => {
    try {
        res.status(StatusCodes.OK).send("Hello world Go Bootcamp");
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("There is an internal Error. Try later");
    }
});

router.get('/GeocodeAddress/:address', async (req, res, next) => {
    try {
        if(req.params.address) {
            let coordinates = await geocoding.QueryGeocoding(req.params.address);
            if(coordinates.lat !== -1) {
                res.status(StatusCodes.OK).send(coordinates);
            } else {
                res.status(StatusCodes.OK).send("There isnt a coordinate with that address. Try again");
            }
        } else {
            res.status(StatusCodes.BAD_REQUEST).send("Bad Request. You should type an address to geocode");
        }
    } catch(error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal Error Api");
    }
});

export = router;