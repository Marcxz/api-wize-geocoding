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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const geocoding_1 = require("../services/geocoding");
require('dotenv').config();
const expect = chai_1.default.expect;
const geocoding = new geocoding_1.Geocoding();
describe('QueryGeocoding()', function () {
    return __awaiter(this, void 0, void 0, function* () {
        it('Test Geocoding with "centro,guadalajara,jalisco" coordinates ', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const coordinate = { lat: 20.6866131, lng: -103.3507872 };
                const address = "centro,guadalajara,jalisco";
                expect(coordinate.lat.toString() + " " + coordinate.lng.toString()).to.be.equal(yield ((yield (yield geocoding.QueryGeocoding(address)).lat.toString()) + ' ' + (yield (yield (yield geocoding.QueryGeocoding(address)).lng.toString()))));
            });
        });
        it('Test Geocoding with "wizeline, zapopan, jalisco, mexico" coordinates ', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const coordinate = { lat: 20.6443271, lng: -103.4163436 };
                const address = "wizeline, zapopan, jalisco, mexico";
                expect(coordinate.lat.toString() + " " + coordinate.lng.toString()).to.be.equal(yield ((yield (yield geocoding.QueryGeocoding(address)).lat.toString()) + ' ' + (yield (yield (yield geocoding.QueryGeocoding(address)).lng.toString()))));
            });
        });
        it('Test Geocoding with "la minerva, guadalajara, jalisco, mexico" coordinates ', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const coordinate = { lat: 20.6743943, lng: -103.3874128 };
                const address = "la minerva, guadalajara, jalisco, mexico";
                expect(coordinate.lat.toString() + " " + coordinate.lng.toString()).to.be.equal(yield ((yield (yield geocoding.QueryGeocoding(address)).lat.toString()) + ' ' + (yield (yield (yield geocoding.QueryGeocoding(address)).lng.toString()))));
            });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUF3QjtBQUN4QixxREFBZ0U7QUFDaEUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBRTFCLE1BQU0sTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDM0IsTUFBTSxTQUFTLEdBQWMsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFFN0MsUUFBUSxDQUFDLGtCQUFrQixFQUFFOztRQUN6QixFQUFFLENBQUMsK0RBQStELEVBQUU7O2dCQUNsRSxNQUFNLFVBQVUsR0FBaUIsRUFBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBQyxDQUFDO2dCQUN0RSxNQUFNLE9BQU8sR0FBRyw0QkFBNEIsQ0FBQztnQkFDN0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUMsR0FBRyxHQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQSxNQUFNLENBQUMsTUFBTSxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFDLEdBQUcsSUFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO1lBQ2pPLENBQUM7U0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsdUVBQXVFLEVBQUU7O2dCQUMxRSxNQUFNLFVBQVUsR0FBaUIsRUFBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBQyxDQUFDO2dCQUN0RSxNQUFNLE9BQU8sR0FBRyxvQ0FBb0MsQ0FBQztnQkFDckQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUMsR0FBRyxHQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQSxNQUFNLENBQUMsTUFBTSxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFDLEdBQUcsSUFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO1lBQ2pPLENBQUM7U0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsNkVBQTZFLEVBQUU7O2dCQUNoRixNQUFNLFVBQVUsR0FBaUIsRUFBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBQyxDQUFDO2dCQUN0RSxNQUFNLE9BQU8sR0FBRywwQ0FBMEMsQ0FBQztnQkFDM0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUMsR0FBRyxHQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQSxNQUFNLENBQUMsTUFBTSxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFDLEdBQUcsSUFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO1lBQ2pPLENBQUM7U0FBQSxDQUFDLENBQUM7SUFHUCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJCSyJ9