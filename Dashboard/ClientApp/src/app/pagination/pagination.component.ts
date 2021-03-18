import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page: number;
  @Input() count: number;
  @Input() perPage: number;
  @Input() pagesToShow: number;
  @Input() loading: boolean;

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPrev(): void {
    this.goPrev.emit(true);
  }

  onNext(): void {
    this.goNext.emit(true);
  }

  onPage(n: number): void {
    this.goPage.emit(n);
  }

  totalPages(): number {
    return Math.ceil(this.count / this.perPage) || 0;
  }

  isLastPage(): boolean {
    return this.perPage * this.page >= this.count;
  }

  getMin(): number {
    return ((this.perPage * this.page) - this.perPage) + 1;
  }

  getMax(): number {
    let max = this.perPage * this.page;
    if (max > this.count) {
      max = this.count;
    }

    return max;
  }

  getPages(): number[] {
    // загальна кількість сторінок
    const totalPages = Math.ceil(this.count / this.perPage);
    const thisPage = this.page || 1;
    const pagesToShow = this.pagesToShow || 9;
    // новий масив сторінок
    const pages: number[] = [];

    pages.push(thisPage);

    console.log('Starting loop with', totalPages, 'thisPage:', thisPage, 'pagesToShow:', pagesToShow);
    // проходимося по сторінках
    for (let i = 0; i < pagesToShow - 1; i++) {
      console.log('pages[]:', pages);
      // якщо довжина масиву менша сторінок для показу
      if (pages.length < pagesToShow) {
        // якщо мінімальна значення нашого масиву більше одиниці
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
          console.log('pushing', Math.min.apply(null, pages) - 1, "on to array");
        }
      }

      // якщо довжина масиву менша сторінок для показу
      if (pages.length < pagesToShow) {
        // якщо максимальне значення масиву менше за кількість сторінок для показу
        if (Math.max.apply(null, pages) < totalPages) {
          // додаємо максимальне значення масиву і додаємо 1
          pages.push(Math.max.apply(null, pages) + 1);
          console.log('pushing', Math.max.apply(null, pages) + 1, "on to array");
        }
      }
    }

    pages.sort((a, b) => a - b);

    return pages;
  }
}
