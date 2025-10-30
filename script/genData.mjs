import { writeFileSync } from "fs";
import { faker } from "@faker-js/faker";

function generateDevices(count = 200) {
  const types = ["Generator", "Transformer", "Motor", "Compressor"];
  const sites = ["Karachi Plant", "Lahore Site", "Islamabad Unit", "Faisalabad Mill"];
  const devices = [];

  for (let i = 0; i < count; i++) {
    const usage = Array.from({ length: 24 }, () => faker.number.float({ min: 50, max: 500 }));
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

// ✅ Create JSON file in src/data
const data = generateDevices(200);
writeFileSync("src/data/devices.json", JSON.stringify(data, null, 2));
console.log("✅ devices.json file created successfully!");
