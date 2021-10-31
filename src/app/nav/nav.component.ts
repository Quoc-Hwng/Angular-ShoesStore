import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  public totalItems: number = 0;
  constructor(private breakpointObserver: BreakpointObserver, private cartService: CartService) {}
  ngOnInit(){
    // this.cartService.getItems().subscribe(res=>{
    //   this.totalItems = res.items.length;
    // })
  }
  public search(){
    alert(123);
  }
}
