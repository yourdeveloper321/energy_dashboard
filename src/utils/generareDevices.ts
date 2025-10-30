import { faker } from "@faker-js/faker";

export type Device = {
  id: string;
  name: string;
  type: string;
  site: string;
  usage: number[];
};

export function generateDevices(count: number = 100): Device[] {
  const types = ["Generator", "Transformer", "Motor", "Compressor"];
  const sites = ["Karachi Plant", "Lahore Site", "Islamabad Unit", "Faisalabad Mill"];

  const devices: Device[] = [];

  for (let i = 0; i < count; i++) {
    const usage = Array.from({ length: 24 }, () =>
      faker.number.float({ min: 50, max: 500 })
    );

    devices.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      type: faker.helpers.arrayElement(types),
      site: faker.helpers.arrayElement(sites),
      usage,
    });
  }

  return devices;
}
