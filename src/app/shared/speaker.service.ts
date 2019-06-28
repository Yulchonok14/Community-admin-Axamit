import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Speaker } from "./speaker.model";

@Injectable()
export class SpeakerService {
    speakerChanged = new Subject<Speaker[]>();

    private speakerList: Speaker[] = [
       /* new Speaker(
            '1',
            '1',
            'Правила работы AEM и Sonarqube',
            `В презентации будут рассмотрены особенности и способы работы с платформой SonarQube для проверки кода на качество по правилам, основанным на различных соглашениях, а также специальный плагин для АЕМ, которые содержит определенный набор советов и рекомендаций для разработки под АЕМ.`,
            '/pdf/meetup-1/AEM_Rules_for_SonarQube.pdf',
            ''
        ),
        new Speaker(
            '1',
            '2',
            'Отзывчивый макет AEM',
            `В докладе мы обсудим, как AEM позволяет реализовать гибкий интерфейс вашего приложения. Разберем, как Responsive Layout предоставляет систему абзацев, которая позволяет размещать компоненты в чувствительной сетке, которая, в свою очередь, может изменять порядок расположения компонентов в соответствии с размером и форматом окна/устройства.`,
            '/pdf/meetup-1/Responsive_Layout.pdf',
            'https://www.youtube.com/watch?v=klRXo8lXiQY&index=3&list=PLQsw8jidJZIFs9jExFQhx0gVGWyWQG_Ej'
        )*/
    ];

    getSpeakerListByMeetupId(id: string):Speaker[] {
        return this.speakerList.filter((speaker: Speaker) => speaker.meetupId === id);
    }

    getSpeakerList():Speaker[] {
        return this.speakerList;
    }

    addSpeaker(speakers: Speaker[]){
        for(let speaker of speakers) {
            this.speakerList.push(speaker);
        }
    }

    updateSpeakers(curMeetupId: string, speakers: Speaker[]) {
        let meetupSpeakerList = this.getSpeakerListByMeetupId(curMeetupId);
        for(let speaker of meetupSpeakerList) {
            let foundSpeakerList = speakers.filter((updatedSpeaker: Speaker) => updatedSpeaker.employeeId === speaker.employeeId);
            if(!foundSpeakerList.length) {
                let deletedSpeaker = this.speakerList.filter(
                    (deletedSpeaker: Speaker) => deletedSpeaker.employeeId === speaker.employeeId
                                                && deletedSpeaker.meetupId === curMeetupId)[0];
                let index = this.speakerList.indexOf(deletedSpeaker);
                this.speakerList.splice(index, 1);
            }
        }
        for(let updatedSpeaker of speakers) {
            let index = this.speakerList.map((speaker: Speaker) => speaker.employeeId).indexOf(updatedSpeaker.employeeId);
            if(!~index) {
                this.speakerList.push(updatedSpeaker);
            } else {
                this.speakerList[index] = updatedSpeaker;
            }
        }
        this.speakerChanged.next(this.getSpeakerListByMeetupId(curMeetupId));
    }

    isEmployeeSpeaker(employeeId: string) {
        let speakersArr = this.speakerList.filter((speaker: Speaker) => speaker.employeeId === employeeId);
        return speakersArr.length > 0;
    }

    setSpeakers(speakers: Speaker[]) {
        this.speakerList = speakers;
        this.speakerChanged.next(this.speakerList.slice());
    }


}
