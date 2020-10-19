import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CaptionModel } from 'src/app/models/caption.model';
import { PlayerModel } from 'src/app/models/player.model';
import { TeamModel } from 'src/app/models/team.model';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import { DialogComponent } from './dialog/dialog.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public panelOpenState: boolean = false;
  public teams: Array<TeamModel>;
  public totalAvg: number = 0;
  public totalPoints: number = 0;
  public totalPlayers: number = 0;
  public captions: Array<CaptionModel>;
  public teamPlayers: Array<PlayerModel>;

  private players: Array<PlayerModel>;

  constructor(private readonly teamService: TeamService,
              private readonly playerService: PlayerService,
              private readonly dialog: MatDialog,
              private readonly translate: TranslateService) { }

  public ngOnInit(): void {

    this.getTeams();
    this.getPlayers();
    this.intializeCaption();
  }

  public teamSelected(idTeam: number): void {

    this.totalAvg = 0;
    this.totalPoints = 0;

    const teamPlayers: Array<PlayerModel> = this.players.filter(x => x.idTeam === idTeam);
    this.teamPlayers = teamPlayers;

    this.totalPlayers = teamPlayers.length;

    teamPlayers.forEach((player: PlayerModel) => {

      this.totalAvg += player.avg;
      this.totalPoints += player.points;
    });
  }

  public viewTeamPlayers(): void {

    this.dialog.open(DialogComponent, {height: '80%', width: '50%', data: this.teamPlayers});
  }

  private getTeams(): void {

    this.teamService.getTeams().subscribe((teams: Array<TeamModel>) => {

      this.teams = teams;
    });
  }

  private getPlayers(): void {

    this.playerService.getPlayers().subscribe((players: Array<PlayerModel>) => {

      this.players = players;
    });
  }

  private async intializeCaption(): Promise<void> {
    this.captions = [
      {
        icon: 'sports_soccer',
        title: await this.translate.get('AVG_TOTAL_TEAM').toPromise(),
        description: await this.translate.get('AVG_TOTAL_TEAM_DESCRIPTION').toPromise(),
      },
      {
        icon: 'stars',
        title: await this.translate.get('POINT_TOTAL_TEAM').toPromise(),
        description: await this.translate.get('POINT_TOTAL_TEAM_DESCRIPTION').toPromise(),
      },
      {
        icon: 'perm_identity',
        title: await this.translate.get('PLAYER_TOTAL_TEAM').toPromise(),
        description: await this.translate.get('PLAYER_TOTAL_TEAM_DESCRIPTION').toPromise(),
      }
    ];
  } 
}
