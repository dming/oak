import { Entity } from "./Entity.ts";

export class Component {
  protected _entity: Entity | undefined;
  public get entity(): Entity | undefined {
    return this._entity;
  }
  public set entity(value: Entity | undefined) {
    this._entity = value;
  }

  constructor() { }
}
