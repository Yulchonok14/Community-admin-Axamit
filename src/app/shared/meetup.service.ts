import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Meetup } from './meetup.model';

@Injectable()
export class MeetupService {
    meetupChanged = new Subject<Meetup[]>();

    private meetupList:Meetup[] = [
        /*new Meetup(
            '1',
            'Meetup #1',
            'Открытие',
            '25 сентября, 2018',
            '18:00',
            '«Angels», ул. Толбухина 2, Минск, Беларусь',
            'fsd fse da',
            [
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                }
            ],
            []
        ),
        new Meetup(
            '2',
            'Meetup #2',
            'БЦ Тайм',
            '25 сентября, 2018',
            '18:00',
            '«Angels», ул. Толбухина 2, Минск, Беларусь',
            '',
            [
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                }
            ],
            []
        ),
        new Meetup(
            '3',
            'Meetup #3',
            'БЦ Тайм',
            '25 сентября, 2018',
            '18:00',
            '«Angels», ул. Толбухина 2, Минск, Беларусь',
            '',
            [
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                },
                {
                    url: '/images/photo/meetup-11/aem_community_meetup11_02.jpg',
                    title: 'AEM community meetup #11 picture 1'
                }
            ],
            []
        ),
        new Meetup(
            '13',
            'Meetup #13',
            'Imaguru',
            '20 февраля, 2019',
            '18:00',
            'Бизнес-клуб Imaguru,  ул. Фабрициуса, 4 (ст. м. Институт Культуры), Минск, Беларусь',
            `На прошлых митапах, кроме AEM, мы иногда касались других продуктов платформы Adobe Experience Cloud. В 2019
            мы будем говорить о них больше. Поэтому приняли решение переименовать сообщество в Adobe Community.
            <br>На встрече 20 февраля мы дадим обзор двум маркетинговым инструментам: Adobe Campaign и Adobe Analytics.
            А во втором докладе расскажем на реальном кейсе, как их “подружить”`,
            [],
            []
        )*/
    ];

    getMeetupList() {
        return this.meetupList.slice();
    }

    getMeetupById(id:string):Meetup {
        let index = this.meetupList.map((meetup:Meetup) => meetup.id).indexOf(id);
        return this.meetupList.slice()[index];
    }

    deleteMeetupById(id:string) {
        let index = this.meetupList.map((meetup:Meetup) => meetup.id).indexOf(id);
        this.meetupList.splice(index, 1);
        this.meetupChanged.next(this.meetupList.slice());
    }

    addMeetup(meetup:Meetup) {
        this.meetupList.push(meetup);
        this.meetupChanged.next(this.meetupList.slice());
    }

    updateMeetup(updatedMeetup:Meetup) {
        let index = this.meetupList.map((meetup: Meetup) => meetup.id).indexOf(updatedMeetup.id);
        this.meetupList[index] = updatedMeetup;
        this.meetupChanged.next(this.meetupList.slice());
    }

    setMeetups(employees: Meetup[]) {
        this.meetupList = employees;
        this.meetupChanged.next(this.meetupList.slice());
    }
}
