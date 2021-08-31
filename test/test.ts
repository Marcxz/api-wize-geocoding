import chai from 'chai';
import { Geocoding, ICoordinates } from '../services/geocoding';
require('dotenv').config()

const expect = chai.expect;
const geocoding: Geocoding = new Geocoding();

describe('QueryGeocoding()', async function () {
    it('Test Geocoding with "centro,guadalajara,jalisco" coordinates ', async function () {
      const coordinate: ICoordinates = {lat: 20.6866131, lng: -103.3507872};
      const address = "centro,guadalajara,jalisco";
      expect(coordinate.lat.toString()+" "+coordinate.lng.toString()).to.be.equal(await (await (await geocoding.QueryGeocoding(address)).lat.toString()+' '+await (await (await geocoding.QueryGeocoding(address)).lng.toString())));
    });

    it('Test Geocoding with "wizeline, zapopan, jalisco, mexico" coordinates ', async function () {
      const coordinate: ICoordinates = {lat: 20.6443271, lng: -103.4163436};
      const address = "wizeline, zapopan, jalisco, mexico";
      expect(coordinate.lat.toString()+" "+coordinate.lng.toString()).to.be.equal(await (await (await geocoding.QueryGeocoding(address)).lat.toString()+' '+await (await (await geocoding.QueryGeocoding(address)).lng.toString())));
    });

    it('Test Geocoding with "la minerva, guadalajara, jalisco, mexico" coordinates ', async function () {
      const coordinate: ICoordinates = {lat: 20.6743943, lng: -103.3874128};
      const address = "la minerva, guadalajara, jalisco, mexico";
      expect(coordinate.lat.toString()+" "+coordinate.lng.toString()).to.be.equal(await (await (await geocoding.QueryGeocoding(address)).lat.toString()+' '+await (await (await geocoding.QueryGeocoding(address)).lng.toString())));
    });


});
  /*
  describe('QueryGeocoding()', async function () {
    it('Test login With noadmin Credentials', async function () {
  
      expect(true).to.be.equal(await (await loginFunction("noadmin", "noPow3r")).valid);
    });
  });
  
  describe('loginFunction()', async function () {
    it('Test login With bob Credentials', async function () {
  
      expect(true).to.be.equal(await (await loginFunction("bob", "thisIsNotAPasswordBob")).valid);
    });
  });
  
  describe('loginFunction()', async function () {
    it('Test login With BAD Credentials', async function () {
  
      expect(false).to.be.equal(await (await loginFunction("miguel", "itisntpass")).valid);
    });
  });
  
  describe('protectFunction()', function () {
    it('Test protected', function () {
  
      expect("You are under protected data").to.be.equal(protectFunction("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI"));
    }); 
  });*/