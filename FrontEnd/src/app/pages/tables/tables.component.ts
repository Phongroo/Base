import { Component, OnInit } from '@angular/core';
import { TableModalComponent } from './table-modal/table-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor (
    private modalService: NgbModal,

   
  ) {}

  ngOnInit() {
  }
  openModal(item?: any, type?: string) {
    const modalRef = this.modalService.open(TableModalComponent,
      {
        centered: true,
        size: 'xl',
        backdrop: 'static'
      });
      modalRef.componentInstance.item = item;
      modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      
        this.modalService.dismissAll();
      })
      modalRef.componentInstance.type = type;
  }


}
