import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { GifsModule } from "./gifs/gifs.module";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    GifsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [

  ]
})
export class AppModule {}
