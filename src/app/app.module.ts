import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatMenuModule, MatSidenavModule, MatAutocompleteModule,
  MatCardModule, MatButtonToggleModule, MatChipsModule, MatDatepickerModule, MatExpansionModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import { CompileDirective } from './compile.directive';
import {HtmlOutlet} from "./html-outlet";


@NgModule({
  declarations: [
    AppComponent,
    CompileDirective,
    HtmlOutlet
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatSidenavModule, MatAutocompleteModule,
    MatCardModule, MatButtonToggleModule, MatChipsModule, MatDatepickerModule, MatExpansionModule, MatGridListModule,
    MatIconModule, MatInputModule, MatListModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
    MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
