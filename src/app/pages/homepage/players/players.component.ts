import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerModel } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import { DialogComponent } from '../teams/dialog/dialog.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  public dataSource: MatTableDataSource<PlayerModel>;
  public displayedColumns: Array<string> = ['points'];

  constructor(private readonly playerService: PlayerService,
              private readonly teamService: TeamService,
              public dialog: MatDialog) { }

  public ngOnInit(): void {

    this.getPlayers();
  }

  public applyFilter(event: Event): void {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public viewDetailPlayer(player: PlayerModel): any {

    const playerSelected: Array<PlayerModel> = Array<PlayerModel>();
    playerSelected.push(player);
    this.dialog.open(DialogComponent, {height: '60%', width: '35%', data: playerSelected});
  }

  private getPlayers(): void {

    this.playerService.getPlayers().subscribe((players: Array<PlayerModel>) => {

      this.dataSource = new MatTableDataSource<PlayerModel>(players);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
