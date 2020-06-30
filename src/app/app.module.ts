import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';
import { CurrentConditionsComponent } from './current-conditions/current-conditions.component';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { WeatherService } from './weather.service';
import { CurrentConditionsEffects } from './effects/current-conditions.effects';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    CurrentConditionsComponent,
    ForecastListComponent,
    MainPageComponent,
    ObservableTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([CurrentConditionsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
