import { Component, OnInit, ViewChild } from '@angular/core';
import { AdvertService } from 'src/app/services/advert.service';
import { Advert } from '../../models/Advert';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CreateAdvertDialogComponent } from '../create-advert-dialog/create-advert-dialog.component';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-client-part',
  templateUrl: './client-part.component.html',
  styleUrls: ['./client-part.component.css']
})
export class ClientPartComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  clientAdsList: Advert[];
  displayedColumns: string[] = ['name', 'code', 'price', 'endDate', 'description', 'edit', 'remove'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(private service: AdvertService, private dialog: MatDialog) { }

  ngOnInit() {

    this.getAdverts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAdverts(): void {
    this.clientAdsList = this.service.getAdverts();
    this.dataSource.data = this.clientAdsList;
    this.dataSource.paginator = this.paginator;
    console.log(this.clientAdsList)
  }

  deleteAdvert(advert: Advert) {
    this.service.deleteAdvert(advert);
    this.getAdverts();
  }

  createAdvert(dialogType: string, advert: Advert) {
    // dialogType sluzi kako bi smo CreateAdvertDialogComponent 
    // koristili i za edit i za create
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      dialogType: dialogType,
      advert: advert
    };
    const dialogRef = this.dialog.open(CreateAdvertDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.getAdverts()
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
