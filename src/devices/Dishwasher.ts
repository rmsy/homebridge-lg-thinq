import {baseDevice} from '../baseDevice';
import {LGThinQHomebridgePlatform} from '../platform';
import {PlatformAccessory} from 'homebridge';
import {Device} from '../lib/Device';
import {WasherDryerStatus} from "./WasherDryer";

export default class Dishwasher extends baseDevice {
  protected serviceDishwasher;
  public stopTime;

  constructor(
    protected readonly platform: LGThinQHomebridgePlatform,
    protected readonly accessory: PlatformAccessory,
  ) {
    super(platform, accessory);

    const {
      Service: {
        Valve,
      },
      Characteristic,
    } = this.platform;

    const device = accessory.context.device;

    this.serviceDishwasher = accessory.getService(Valve) || accessory.addService(Valve, 'Dishwasher');
    this.serviceDishwasher.setCharacteristic(Characteristic.Name, device.name);
    this.serviceDishwasher.setCharacteristic(Characteristic.ValveType, Characteristic.ValveType.WATER_FAUCET);
    this.serviceDishwasher.getCharacteristic(Characteristic.RemainingDuration).setProps({
      maxValue: 86400, // 1 day
    });

    this.updateAccessoryCharacteristic(device);
  }

  public updateAccessoryCharacteristic(device: Device) {
    super.updateAccessoryCharacteristic(device);

    const {Characteristic} = this.platform;

    this.serviceDishwasher.updateCharacteristic(Characteristic.RemainingDuration, this.Status.remainDuration);
    this.serviceDishwasher.updateCharacteristic(Characteristic.Active, this.Status.isPowerOn ? 1 : 0);
    this.serviceDishwasher.updateCharacteristic(Characteristic.InUse, this.Status.isRunning ? 1 : 0);
  }

  public get Status() {
    return new DishwasherStatus(this.accessory.context.device.snapshot?.dishwasher, this);
  }
}

// shared some status in washer
export class DishwasherStatus extends WasherDryerStatus {
  public get isRunning() {
    return this.data?.state === 'RUNNING';
  }
}
