import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
        /* this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
        this.BookList = <GetOrInitializeYourListHere>;
        this.pagedList = this.productsList.slice(0, 3);
        this.length = this.productsList.length; */
  }
  /* OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.productsList.slice(startIndex, endIndex);
  }

  onResize(event) { //to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
 */
}
