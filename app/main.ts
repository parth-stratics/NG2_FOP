/**
 * Created by User on 9/30/2016.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './baseModule/appModule';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
