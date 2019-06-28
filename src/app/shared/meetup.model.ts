import { Image } from './image.model';
import { Speaker } from '../shared/speaker.model';

export class Meetup {
    public id: string;
    public name: string;
    public date: string;
    public time: string;
    public shortLocation: string;
    public fullLocation: string;
    public description: string;
    public images: Image[];
    public speakers: Speaker[];

    constructor(
        id: string, name: string, shortLocation: string, date: string, time: string, fullLocation: string, description: string,
        images: Image[], speakers: Speaker[]) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.time = time;
        this.shortLocation = shortLocation;
        this.fullLocation = fullLocation;
        this.description = description;
        this.images = images;
        this.speakers = speakers;
    }
}
