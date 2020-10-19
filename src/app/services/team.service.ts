import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoteRepository } from '../core/repository/remote.repository';
import { EnpointsEnum } from '../core/repository/enums/endpoints.enum';
import { TeamModel } from '../models/team.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private readonly remoteRepository: RemoteRepository) { }

  public getTeams(): Observable<Array<TeamModel>> {

    return this.remoteRepository.get(EnpointsEnum.TEAMS).pipe(map((res: any) => {

      try {

        return TeamModel.deserializeArray(res, TeamModel);

      } catch (error) {

        console.log(error);
      }
    }));
  }
}
