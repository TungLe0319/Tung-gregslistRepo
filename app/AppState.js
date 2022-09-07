import { Car } from './Models/Car.js';
import { Value } from './Models/Value.js';
import { EventEmitter } from './Utils/EventEmitter.js';
import { isValidProp } from './Utils/isValidProp.js';
import { loadState } from './Utils/Store.js';
import { House } from './Models/House.js';
class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value);

  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', Car);

  // -------------------------------------------
  /** @type {import('./Models/House').House[]} */
houses = loadState('houses', House)




  // houses = [
  //   new House(
  //     4,
  //     4,
  //     2,
  //     'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F13%2Fd2%2F96%2F13d2968b7f35e6a9e0d5378609c3f29c.jpg&f=1&nofb=1',
  //     2012,
  //     180000,
  //     'a pretty house'
  //   ),
  //   new House(
  //     4,
  //     2,
  //     1,
  //     'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1d%2Ff5%2F79%2F1df579f5f0bd8482541d70a2f71750e5.jpg&f=1&nofb=1',
  //     2001,
  //     54000,
  //     'Knotty Cabin right next to the OceanSide Oregon Beach, Absolutley stunning view and small walk to the beachfront.'
  //   ),
  //   new House(
  //     5,
  //     3,
  //     2,
  //     'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1d%2Ff5%2F79%2F1df579f5f0bd8482541d70a2f71750e5.jpg&f=1&nofb=1',
  //     1799,
  //     45000,
  //     'Lizzie Borden House, from the famous murder mystery, probs haunted as heck. pretty cool though.'
  //   ),
  //   new House(
  //     8,
  //     4,
  //     3,
  //     'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.doityourselfrv.com%2Fwp-content%2Fuploads%2F2015%2F02%2F30-foot-long-tiny-house.jpg&f=1&nofb=1',
  //     2020,
  //     415000,
  //     'Charming Mansion for the wealthy and lucky to be able to be in Switzerland.'
  //   ),

  // ];
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
