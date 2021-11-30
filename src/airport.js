import * as fs from 'fs';
import { readFile } from 'fs/promises';

class Airport {
  static airports = [];

  constructor(name) {
    this.name = name;
    this.airplanes = [];
    this.constructor.airports = [...this.constructor.airports, this];
  }

  getInfoCallback(callback) {
    const filePath = new URL("../data/airport-data.json", import.meta.url);
    fs.readFile(filePath, (err, data) => {
      const airports = JSON.parse(String(data));
      const airport = airports.find(airport => airport.iata === this.name);
      callback(err, airport)
    })
  }

  getInfoPromise() {
    const filePath = new URL("../data/airport-data.json", import.meta.url);
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) return reject(err)
        const airports = JSON.parse(String(data))
        const airport = airports.find(airport => airport.iata === this.name);
        resolve(airport)
      })
    })
  }

  async getInfoAsync() {
    const filePath = new URL("../data/airport-data.json", import.meta.url);
    try {
      const getData = await readFile(filePath);
      const airports = JSON.parse(String(getData));
      const airport = airports.find(airport => airport.iata === this.name);
      return airport;
    } catch (err) {
      console.error(err);
    }
  }

  land(airplane) {
    this.airplanes = [...this.airplanes, airplane];
  }

  takeOff(airplaneId) {
    this.airplanes = airplanes.filter(airplane => airplane.id !== airplaneId);
  }
}

export default Airport;