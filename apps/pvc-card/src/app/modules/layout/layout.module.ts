import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
  HeaderComponent
} from "./components/header/header.component";
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HeaderComponent, CardComponent],
  exports: [
    HeaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule{}
