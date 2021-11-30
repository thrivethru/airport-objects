import Airport from '../src/airport';
import Airplane from '../src/airplane';

describe("Airport class", () => {
  test("Creates Airport instance", () => {
    const dfw = new Airport("DFW");
    expect(dfw).toBeDefined();
    expect(dfw instanceof Airport).toBeTruthy();
  })

  test("can have airplanes land", () => {
    const dfw = new Airport("DFW");
    const id = "1A";
    const capacity = 250;
    const range = 1000;
    const testAirplane = new Airplane(id, capacity, range);
    expect(dfw.airplanes.length).toBe(0);
    dfw.land(testAirplane);
    expect(dfw.airplanes.length).toBe(1);
    expect(dfw.airplanes[0]).toBe(testAirplane);
  })

  test('airports have a city', (done) => {
    const CDG = new Airport('CDG')
    CDG.getInfoCallback((err, info) => {
      expect(err).toBeNull();
      expect(info.country).toEqual('FR');
      done();
    })
  })

  test('airports have a city', () => {
    const CDG = new Airport('CDG');
    return CDG.getInfoPromise()
      .then(info => {
        expect(info.city).toEqual('Paris');
      })
      .catch(err => {
        expect(err).toBeNull();
      });
  })

  test('can get information like the city from an airport instance', async () => {
    const CDG = new Airport('CDG');
    const airport = await CDG.getInfoAsync();
    expect(airport.city).toEqual('Paris');
  })
})