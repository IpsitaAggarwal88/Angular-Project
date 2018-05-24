import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {HttpService} from '../../http.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    students=[];

    constructor(private _httpService:HttpService) {
        this.sliders.push(
            {
                imagePath: 'https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
                label: 'In Teaching You Will Learn',
                text:
                    '-Aristotle'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {

    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    getStudents(){
        let observable=this._httpService.getStudents();
        observable.subscribe( data => {
            this.students=data['data'];
            console.log("students:",this.students);
        })
    }
}
