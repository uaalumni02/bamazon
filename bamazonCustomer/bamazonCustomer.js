var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mecotyya1!',
    database: 'bamazon'
})


function initiateShopping(){
connection.query('SELECT * FROM Products', function(err, res){
  if(err) throw err;

  console.log('Welcome to Bamazon')
  console.log('----------------------------------------------------------------------------------------------------')

  for(var i = 0; i<res.length;i++){
    console.log("ID: " + res[i].ItemId + " | " + "Product: " + res[i].ProductName + " | " + "Department: " + res[i].DepartmentName + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].StockQuantity);
    console.log('--------------------------------------------------------------------------------------------------')
  }

  console.log(' ');
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "May I please have the ID of the item that you would like to purchase?",
      validate: function(value){
        if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
          return true;
        } else{
          return false;
        }
      }
    },
    {
      type: "input",
      name: "qty",
      message: "How much would you like to buy today?",
      validate: function(value){
        if(isNaN(value)){
          return false;
        } else{
          return true;
        }
      }
    }
    ]).then(function(ans){
      var whatToBuy = (ans.id)-1;
      var howMuchToBuy = parseInt(ans.qty);
      var grandTotal = parseFloat(((res[whatToBuy].price)*howMuchToBuy).toFixed(2));

      if(res[whatToBuy].StockQuantity >= howMuchToBuy){
        connection.query("UPDATE Products SET ? WHERE ?", [
        {StockQuantity: (res[whatToBuy].StockQuantity - howMuchToBuy)},
        {ItemID: ans.id}
        ], function(err, result){
            if(err) throw err;
            console.log("Accepted Your total is $" + grandTotal.toFixed(2) + ". Your order will arrive in the next few days");
        });

        connection.query("SELECT * FROM Departments", function(err, deptRes){
          if(err) throw err;
          var index;
          for(var i = 0; i < deptRes.length; i++){
            if(deptRes[i].DepartmentName === res[whatToBuy].DepartmentName){
              index = i;
            }
          }
          
          connection.query("UPDATE Departments SET ? WHERE ?", [
          {TotalSales: deptRes[index].TotalSales + grandTotal},
          {DepartmentName: res[whatToBuy].DepartmentName}
          ], function(err, deptRes){
              if(err) throw err;
          });
        });

      } else{
        console.log("Not enough to fill the order!");
      }

      startOver();
    })
})
}

function startOver(){
  inquirer.prompt([{
    type: "confirm",
    name: "reply",
    message: "Any additional purchases?"
  }]).then(function(ans){
    if(ans.reply){
      initiateShopping();
    } else{
      console.log("Come back to see us!");
    }
  });
}

initiateShopping();
