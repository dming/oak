import { Component } from "./Component.ts";

type Constructor<T = {}> = new (...args: any[]) => T;

export enum EntityStatus {
  None = 0,
  IsFromPool = 1,
  IsRegister = 1 << 1,
  IsComponent = 1 << 2,
  IsCreate = 1 << 3,
}

export class Entity {
  public instanceId: number = 0;

  public id!: number;

  protected _status: EntityStatus = EntityStatus.None;

  public get isComponent(): boolean {
    return (this._status & EntityStatus.IsComponent) ==
      EntityStatus.IsComponent;
  }
  public set isComponent(value: boolean) {
    this._status = value
      ? (this._status | EntityStatus.IsComponent)
      : (this._status & ~EntityStatus.IsComponent);
  }

  public get isDipose(): boolean {
    return this.instanceId == 0;
  }

  protected _parent!: Entity;

  protected _children: Map<number, Entity> = new Map<number, Entity>();
  public get children(): Map<number, Entity> {
    return this._children = this._children || new Map<number, Entity>();
  }

  protected _components: Map<string, Component> = new Map<
    string,
    Component
  >();
  public get components(): Map<string, Component> {
    return this._components = this._components ||
      new Map<string, Component>();
  }

  constructor() {
  }

  public addChild(entity: this) {
    this.children.set(entity.id, entity);
  }

  public removeChild(entity: this) {
    if (!this.children) return;
    this.children.delete(entity.id);
  }

  public addComponent<T extends Component>(classConstructor: Constructor<T>): T | null | undefined;
  public addComponent(className: string): Component | null | undefined;
  public addComponent(typeOrClassName: string | typeof Component): Component | null | undefined {
    let ctor: typeof Component;
    if (typeof typeOrClassName === "string") {
      return undefined;
    } else {
      ctor = typeOrClassName;
    }

    if (typeof ctor != "function") {
      return undefined;
    }
    const component = new ctor();
    component.entity = this;
    this.components.set;
  }
}
