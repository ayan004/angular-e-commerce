import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private products: ProductsService) { }

  furnitureList: any = [];

  ngOnInit(): void {
    this.products.getList().subscribe((result: any)=> {
      this.furnitureList = result;
      this.displayProducts(this.furnitureList);
    }); 
  }

  displayProducts(list: any[]){
    console.log(list.length);
    var homapageProducts = document.getElementById("homepageProducts");
    for(var i = 0; i < list.length; i++){
      var div = document.createElement("div");
      div.innerHTML = `<div class="col-lg-3 col-sm-6 col-md-3">
              <a href="product/`+ list[i].id +`">
                <div class="box-img">
                  <h4>Product</h4>
                  <img src="" alt="" />
                  <h2>` + list[i].name + `</h2>
                </div>
              </a>
            </div>`;
      homapageProducts?.appendChild(div);
    }
  }

  // test(){
  //   console.log("testing..");
  //   this.products.getList().subscribe((result)=> {
  //     console.log(result);
  //   });
  // }
}
