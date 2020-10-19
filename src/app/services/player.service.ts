import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoteRepository } from '../core/repository/remote.repository';
import { EnpointsEnum } from '../core/repository/enums/endpoints.enum';
import { PlayerModel } from '../models/player.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private readonly remoteRepository: RemoteRepository) { }

  public getPlayers(): Observable<Array<PlayerModel>> {

    return this.remoteRepository.get(EnpointsEnum.PLAYERS).pipe(map((res: any) => {

      try {

        return PlayerModel.deserializeArray(res, PlayerModel);

      } catch (error) {

        console.log(error);
      }
    }));
  }
}
