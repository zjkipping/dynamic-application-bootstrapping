import { InjectionToken } from "@angular/core";

export const ENVIRONMENT_TOKEN = new InjectionToken("ENVIRONMENT_TOKEN");

export enum EnvironmentType {
  Production = "production",
  Development = "development",
  Testing = "testing"
}

export interface Environment {
  type: EnvironmentType;
}

export const environment: Environment = {
  type: EnvironmentType.Production
};
