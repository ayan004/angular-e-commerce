import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  furnitureDetails: any;

  constructor(private activatedRoute: ActivatedRoute, private products: ProductsService) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params.id);
    this.products.getById(this.activatedRoute.snapshot.params.id).subscribe((result) => {
      this.furnitureDetails = result;
    });
  }

  test(id: any){
    var array: any = [];
    var ids = localStorage.getItem("ids");
    if(ids == null){
      id = id.toString();
      array.push(id);
      array = JSON.stringify(array);
      localStorage.setItem("ids", array);
    } else {
      array = JSON.parse(ids);
      var count = 0;
      for(var i = 0; i < array.length; i++){
        if(id == array[i]){
          count++;
          for(var j = i+1 ; j < array.length; j++){
            array[j-1] = array[j];
          }
          array.splice(-1,1);
          array = JSON.stringify(array);
          localStorage.setItem("ids", array);
          break;
        }
      }
      if(count == 0){
      id = id.toString();
      array.push(id);
      array = JSON.stringify(array);
      localStorage.setItem("ids", array);
      }
      
    }
  }

}
