import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishIds: any;
  wishlist: any = [];
  constructor(private products: ProductsService) { }

  ngOnInit(): void {
    this.wishIds = localStorage.getItem("ids");
    this.wishIds = JSON.parse(this.wishIds);
    // console.log(wishlist, typeof wishlist);
    for(var i = 0; i < this.wishIds.length; i++ ){
      // console.log(this.wishlist[i]);
      this.products.getById(this.wishIds[i]).subscribe((result)=>{
        // console.log(result);
        this.wishlist.push(result);
      });
    }
    console.log(this.wishlist);
  }

}
