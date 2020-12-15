import { ApplicationRef, NgModule, Inject, DoBootstrap } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { InFrameComponent } from "./in-frame.component";
import {
  Environment,
  environment,
  EnvironmentInjectable,
  WindowInjectable
} from "./environment";
import { decideRootComponent } from "./util";

@NgModule({
  declarations: [AppComponent, InFrameComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: EnvironmentInjectable,
      useValue: environment
    },
    {
      provide: WindowInjectable,
      useValue: window
    }
  ]
})
export class AppModule implements DoBootstrap {
  constructor(
    @Inject(EnvironmentInjectable) private env: Environment,
    @Inject(WindowInjectable) private window: Window
  ) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    const rootComponent = decideRootComponent(this.window, this.env);
    appRef.bootstrap(rootComponent);
  }
}
