import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataStorageService } from '../shared/data-storage.service';
import { SpeakerService } from '../shared/speaker.service';
import { Speaker } from '../shared/speaker.model';

@Injectable({providedIn: 'root'})
export class SpeakerResolverService implements Resolve<Speaker[]> {
    constructor(private dataStorageService: DataStorageService, private speakerService: SpeakerService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const speakers = this.speakerService.getSpeakerList();
        if(speakers.length == 0) {
            return this.dataStorageService.getSpeakers();
        } else {
            return speakers;
        }
    }
}
