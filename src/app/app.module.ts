import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardBigComponent } from './components/card-big/card-big.component';
import { CardSmallComponent } from './components/card-small/card-small.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuSocialMediaComponent } from './components/menu-social-media/menu-social-media.component';
import { ContentComponent } from './pages/content/content.component';
import { MenuSocialTitleComponent } from './components/menu-social-media/menu-social-title/menu-social-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardBigComponent,
    CardSmallComponent,
    MenuBarComponent,
    MenuSocialMediaComponent,
    ContentComponent,
    MenuSocialTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
