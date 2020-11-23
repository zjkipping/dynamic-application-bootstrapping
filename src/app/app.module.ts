import { ApplicationRef, NgModule, Inject } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { InFrameComponent } from "./in-frame.component";
import { Environment, environment, ENVIRONMENT_TOKEN } from "./environment";
import { decideRootComponent } from "./util";

@NgModule({
  declarations: [AppComponent, InFrameComponent],
  imports: [BrowserModule, FormsModule],
  providers: [
    {
      provide: ENVIRONMENT_TOKEN,
      useValue: environment
    }
  ]
})
export class AppModule {
  constructor(@Inject(ENVIRONMENT_TOKEN) private env: Environment) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    const rootComponent = decideRootComponent(window, this.env);
    appRef.bootstrap(rootComponent);
  }
}
