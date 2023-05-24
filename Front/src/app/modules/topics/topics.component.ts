// import { Component, ViewChild } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
// import { MessageService } from "../../message/message.service";
// import { MatPaginator } from "@angular/material/paginator";
// import { MatTableDataSource } from '@angular/material/table'
// import { MatSort, Sort } from '@angular/material/sort';
// import { ActivatedRoute, Route } from '@angular/router';
// import { MatDialog } from '@angular/material/dialog';
// export interface Employee {
//   Id: number,
//   FirstName: string,
//   LastName: string,
//   Email: string,
//   Gender: string,
//   JobTitle: string
// }
// export interface BreadcrumbData {
//   nom: string,
//   route: string
// }

// @Component({
//   selector: 'app-topics',
//   templateUrl: './topics.component.html',
//   styleUrls: ['./topics.component.css']
// })




// export class TopicsComponent {
//   data_array: any[] = [];
//   data_array2: any[] = [];
//   dataSource = new MatTableDataSource(this.data_array);
//   dataSourceWithPageSize = new MatTableDataSource(this.data_array);
//   my_id !: any;
//   path: BreadcrumbData[] = [];
//   @ViewChild('paginator') paginator!: MatPaginator;
//   @ViewChild('paginatorPageSize') paginatorPageSize!: MatPaginator;
//   @ViewChild('empTbSort') empTbSort = new MatSort();
//   url: any;
//   url1: any;
//   url2: any;
//   pageSizes = [1, 2, 6];
//   idtopic!: any;
//   nomtopic!: any;
//   ngAfterViewInit() {

//   }
//   displayedColumns: string[] = ['NomTopic', 'NbPost', 'Dernier message', 'idTopic'];
//   constructor(private http: HttpClient, private service: MessageService, private route: ActivatedRoute, public dialog: MatDialog) {

//     this.url = window.location.href

//     this.url1 = this.url.slice(22, this.url.length - 2)
//     this.url2 = this.url.slice(-1)

//     this.path = [
//       { nom: "tous les cours", route: '/cours' },
//       { nom: this.url2, route: '' },


//     ];

//   }
//   ngOnInit() {

//     this.my_id = this.route.snapshot.params['id'];

//     this.service.getTopics("topic", this.my_id)
//       .subscribe((data) => {

//         if (Array.isArray(data)) {
//           this.data_array = data;
//           this.idtopic = data[0].idTopic
//           this.dataSource = new MatTableDataSource(this.data_array);
//           this.dataSource.paginator = this.paginator;
//           this.dataSource.sort = this.empTbSort;
//           console.log(this.idtopic)
//         }
//       },
//         (error) => {
//           console.log(error);
//         });



//     this.service.getnumTopic("getnumTopic", this.url2)
//       .subscribe((data) => {
//         if (Array.isArray(data)) {

//           this.nomtopic = data[0].NomCours;
//           console.log(this.idtopic)

//         }
//         else {
//           console.log("deez")
//         }

//       },
//         (error) => {
//           console.log(error);
//         });


//   }
//   creation_sujet() {
//     console.log('creation sujet');

//   }
// }
