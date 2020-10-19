import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { DialogComponent } from './teams/dialog/dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PlayersComponent, TeamsComponent, DialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    TranslateModule
  ],
  entryComponents: [DialogComponent]
})
export class HomepageModule { }
