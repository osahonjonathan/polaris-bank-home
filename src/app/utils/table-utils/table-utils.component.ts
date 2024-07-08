import { Component, Input, OnInit } from '@angular/core';
import { Column } from 'src/app/interface/general';

@Component({
  selector: 'app-table-utils',
  templateUrl: './table-utils.component.html',
  styleUrls: ['./table-utils.component.css']
})
export class TableUtilsComponent implements OnInit {
 
  @Input() data: any[] = [];
  @Input() columns: Column[] = [];
  @Input() pageSize: any = 10;

  filteredData: any[] = [];
  paginatedData: any[] = [];
  currentPage: number = 1;
  sortColumn: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';
  searchTerm: string = '';


  get totalItems() {
    return this.filteredData.length;
  }

  get totalPages() {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get startItem() {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endItem() {
    return Math.min(this.startItem + this.pageSize - 1, this.totalItems);
  }

  ngOnInit() {
    this.filteredData = this.data;
    this.updatePaginatedData();
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.filteredData = this.data.filter(item =>
      this.columns.some(column =>
        item[column.key].toString().toLowerCase().includes(this.searchTerm)
      )
    );
    this.currentPage = 1;
    this.updatePaginatedData();
  }

  sort(column: Column) {
    if (this.sortColumn === column.key) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column.key;
      this.sortOrder = 'asc';
    }

    this.filteredData.sort((a, b) => {
      const aValue = a[column.key];
      const bValue = b[column.key];
      return this.sortOrder === 'asc'
        ? aValue > bValue ? 1 : -1
        : aValue < bValue ? 1 : -1;
    });

    this.updatePaginatedData();
  }

  updatePaginatedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.filteredData.slice(start, end);
  }

  changePageSize(event: any) {
    this.pageSize = event.target.value;;
    this.currentPage = 1;
    this.updatePaginatedData();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }

}



