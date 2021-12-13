 class Product {
     constructor(name, price){
         this.name = name;
         this.price = price;

     }
 }

 class UI {
     addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="product"> 
                <div>
                    <strong>Nombre producto</strong>: ${product.name} 

                    <strong>Precio producto</strong>: ${product.price}

                    <a href="#" class="danger" name="delete">X</a>
                </div>
            </div>
            
            `;
            productList.appendChild(element);
     }

     resetForm(){
         document.getElementById('product-form').reset();

     }
     deleteProduct(element){
        if (element.name === 'delete') {
            console.log(element.parentElement.parentElement.remove())
            this.showMessage('Producto eliminado satisfactoriamente','info');
        }

     }
     showMessage(message, cssClass){
         const div = document.createElement('div');
         div.className = `alert ${cssClass}`;
         div.appendChild(document.createTextNode(message));
         //Showwing DOM

         const container = document.querySelector('.container');
         const app = document.querySelector('.app');
         container.insertBefore(div, app);
         setTimeout( function(){
             document.querySelector('.alert').remove();
         },3000)

     }
 }

 //DOM events

 document.getElementById('product-form').addEventListener('submit',function(e){
     const name = document.getElementById('name').value;
     const price = document.getElementById('price').value;

     //console.log(name, price);

     //console.log(new producto(name, price));

     const product = new Product(name, price);

     const ui = new UI ();
     e.preventDefault();

     if (name ==='' || price ==='') {
        ui.showMessage('Llene todos los campos', 'danger');
        return  
     }
     ui.addProduct(product);
     ui.resetForm();
     ui.showMessage('Producto agregado satisfactoriamente','success')

    
 })

 document.getElementById('product-list').addEventListener('click', function(e){
    
    const ui = new UI();
    ui.deleteProduct(e.target);



 })

