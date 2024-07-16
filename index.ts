type TVehicleFuelType =
  | "Diesel"
  | "Gasoline"
  | "Ethanol"
  | "Hybrid"
  | "Electrified";

type TVehicleColor =
  | "Azul"
  | "Amarelo"
  | "Vermelho"
  | "Prata"
  | "Preto"
  | "Branco";
type TVehicleTransmission = "Manual" | "Automátic";

interface IVehicleInfo {
  name: string;
  type: string;
  potency: number;
  fuelType: TVehicleFuelType;
  capacity: number;
  transmission: TVehicleTransmission;
  year: number;
  color: string;
  hood?: boolean;
  appleCarPlayIntegration?: boolean;
}

class Car {
  vehicleInfo: IVehicleInfo;

  constructor(info: IVehicleInfo) {
    this.vehicleInfo = info;
  }
}

class Nautical {
  vehicleInfo: IVehicleInfo;

  constructor(info: IVehicleInfo) {
    this.vehicleInfo = info;
  }
}

class Tractor {
  vehicleInfo: IVehicleInfo;

  constructor(info: IVehicleInfo) {
    this.vehicleInfo = info;
  }
}

class Truck {
  vehicleInfo: IVehicleInfo;

  constructor(info: IVehicleInfo) {
    this.vehicleInfo = info;
  }
}

class VehicleBuilder {
  private vehicleInfo: Partial<IVehicleInfo> = {};

  setName(name: string) {
    this.vehicleInfo.name = name;
    return this;
  }

  setType(type: string) {
    this.vehicleInfo.type = type;
    return this;
  }

  setPotency(potency: number) {
    this.vehicleInfo.potency = potency;
    return this;
  }

  setFuelType(fuelType: TVehicleFuelType) {
    this.vehicleInfo.fuelType = fuelType;
    return this;
  }

  setCapacity(capacity: number) {
    this.vehicleInfo.capacity = capacity;
    return this;
  }

  setTransmission(transmission: TVehicleTransmission) {
    this.vehicleInfo.transmission = transmission;
    return this;
  }

  setYear(year: number) {
    this.vehicleInfo.year = year;
    return this;
  }

  setColor(color: string) {
    this.vehicleInfo.color = color;
    return this;
  }

  setHood(newHood: boolean) {
    this.vehicleInfo.hood = newHood;
    return this;
  }

  setAppleCarPlayIntegration(newAppleCarPlayIntegration: boolean) {
    this.vehicleInfo.appleCarPlayIntegration = newAppleCarPlayIntegration;
    return this;
  }

  reset() {
    this.vehicleInfo = {};
    return this;
  }

  build() {
    return this.vehicleInfo as IVehicleInfo;
  }
}

enum VehicleType {
  Nautical = "nautical",
  Tractor = "tractor",
  Truck = "truck",
  Car = "carro",
}

class VehicleFactory {
  create(info: IVehicleInfo) {
    switch (info.type) {
      case VehicleType.Car:
        return new Car(info);

      case VehicleType.Tractor:
        return new Tractor(info);

      case VehicleType.Nautical:
        return new Nautical(info);

      case VehicleType.Truck:
        return new Truck(info);

      default:
        throw new Error("Invalid Vehicle Type Informed");
    }
  }
}

const vehicleBuilder = new VehicleBuilder();
const vehicleFactory = new VehicleFactory();

const vehicle = vehicleFactory.create(
  vehicleBuilder
    .setName("BYD Seal")
    .setYear(2023)
    .setFuelType("Electrified")
    .setType("carro")
    .setCapacity(4)
    .setColor("Azul")
    .setTransmission("Automátic")
    .setPotency(540)
    .build()
);
console.log(vehicle);
