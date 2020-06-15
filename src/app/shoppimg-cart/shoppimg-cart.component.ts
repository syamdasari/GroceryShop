import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppimg-cart',
  templateUrl: './shoppimg-cart.component.html',
  styleUrls: ["../../assets/bootstrap-4.5.0-dist/css/bootstrap.min.css"]
})
export class ShoppimgCartComponent implements OnInit {

  item= {name:'',id:  0, qty: 0};
  list = [];
  editExisting = false;
  hideClearAllText  = false;
  status = " Recent Action ";
  alertStatus ='alert alert-light';

  constructor() {

  }

  ngOnInit(): void {
  }

   addItemToList()
   {
    console.log("Adding Item");
    if(this.item.name != '')
        {
          for(let i=0;  i<this.list.length; i++) {
           if(this.list[i].name == this.item.name)
            {
                this.list[i].qty = this.item.qty;
                this.editExisting = true;
                this.item.name ="";
                this.item.qty=0;
            } else
              this.editExisting = false;
          }

          if(this.editExisting == true) {
              this.status = "Updated existing item"
           } else {
             console.log(" Adding items again");
          this.list.push({name: this.item.name, id: this.list.length + 1, qty: Number(this.item.qty) });
          this.item.name = "";
          this.item.qty=0;
          this.editExisting = false;
            this.status = "Added a new item to list";
        }
          this.alertStatus = 'alert alert-success';
      }
      else {
        status = ' Please add an item and Qty ';
        this.alertStatus = 'alert alert-warning';
     }
   }
   clearAllItemsFromList()
   {
     this.list=[];
   }
   strikeListItem(id)
   {

   }
   editListItem(id)
   {
     for(let i=0;i<this.list.length;i++) {
       if(this.list[i].id == id)
        {
          this.item.name = this.list[i].name;
          this.item.qty = this.list[i].qty;
          status = 'updated the item';

          }

     }
   }
   deleteItemFromList(id)
   {
    for(let i=0;i<this.list.length;i++) {
      if(this.list[i].id == id)
       {
           this.list.splice(i,1);
        }
    }

   }
}
