import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

@Component
({ 
  selector: 'hello-angular', 
  template: '<h1> {{greeting}} </h1>' 
}) 
class HelloAngularComponent { 
  greeting: string; 
  constructor() 
  { 
    this.greeting = 'Hello Angular 2!'; 
  } 
}