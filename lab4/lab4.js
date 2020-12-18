 $.ajax({ 
        url: "trains.json", 
        dataType: "json", 
        method: "GET",    
        data: {},
        success: function(data) {
        if(data.length) {

          let number = $("<th></th>").text("Number");
          let tripTo = $("<th></th>").text("To");
          let tripFrom = $("<th></th>").text("From");
          let price = $("<th></th>").text("Price");
          $("body").append($("<table></table>").attr("id", "table").append($("<tr></tr>").append(number, tripTo, tripFrom, price)));

          for (let i = 0; i < data.length; i++){          
            let numberData = $("<td></td>").text(data[i]["number"]);
            let tripFromData = $("<td></td>").text(data[i]["tripTo"]);
            let tripToData = $("<td></td>").text(data[i]["tripFrom"]);
            let priceData = $("<td></td>").text(data[i]["price"]).attr("name", "price" + i);
            //let button = $("<button></button>").attr("onclick", "moduleT.deleteTr(this)").attr("name", i).text("delete");
            // $("table").append($("<tr></tr>").attr("id", i).append(numberData, tripFromData,  tripToData, priceData, button));
            $("table").append($("<tr></tr>").attr("id", i).append(numberData, tripFromData,  tripToData, priceData));
          }
        }
      }
    });

let hello=$("<p></p>").text("hello");
$("body").append(hello);

   

 let number = $("<p></p>").text("Number: ").append($("<input>").attr("type", "number").attr("id", "number"));
    let tripTo = $("<p></p>").text("To: ").append($("<input>").attr("type", "text").attr("id", "tripTo"));
    let tripFrom = $("<p></p>").text("From: ").append($("<input>").attr("type", "text").attr("id", "tripFrom"));
    let price = $("<p></p>").text("Price: ").append($("<input>").attr("type", "number").attr("id", "price"));
    let buttonAdd = $("<button></button>").text("Add").attr("onclick", "moduleT.createArray()");
    let div = $("<div></div>");
    $("body").append(number, tripTo, tripFrom, price, buttonAdd, div); 
/*
    let moduleT = (function() {
      let array=[];
      let getHeader;

      function createArray(){
        let train = {
            "number": $("#number").val(),
            "tripTo": $("#tripTo").val(),
            "tripFrom": $("#tripFrom").val(),
            "price": $("#price").val()
          };
          array.push(train);
          getHeader = Object.keys(train);
          moduleT.printTable();
      }

      function printTable(){
        if($("table").is("#table")){
          $("#table").empty();
        }
        
        let tr=$("<tr></tr>");
        let table=$("<table></table>").attr("id", "table").append(tr);

        for(let i=-1; i<array.length; i++){
              let tr=$("<tr></tr>");
            
              if(i==-1){
                for(let j=0; j<=getHeader.length; j++){
                  let th=$("<th></th>");
                  tr.append(th);
                  
                  if(j==getHeader.length) th.text("button");
                  else th.text(getHeader[j]);
                }
              }

              else{
                for(let j=0; j<getHeader.length; j++){
                  let td=$("<td></td>");
                  tr.append(td);
                  if (getHeader[j] == 'price') {
                    td.attr("className", "price");
                  }
                  td.text(getData(i, j));
                }
                let button=$("<button></button>").attr("onclick", "moduleT.deleteTr(this)").attr("name", i).text("Delete");  
                tr.append(button);
                  
              }
              table.append(tr);
            }
            table.attr("border", "2");

          if($("h3")){
              $("h3").empty();
          }
          $("body").append($("<h3></h3>").text("\nAverage price equals " + moduleT.averagePrice()+"."))
      }

     
      return {
        createArray: createArray,
        printTable: printTable
      }
    })();*/
    /* function add(array = []){
        if(array.length) {
          $("table").empty();
          let number = $("<th></th>").text("Number");
          let tripTo = $("<th></th>").text("To");
          let tripFrom = $("<th></th>").text("From");
          let price = $("<th></th>").text("Price");
          $("table").attr("id", "table").append($("<tr></tr>").append(number, tripTo,  tripFrom, price));

          for (let i = 0; i < array.length; i++){           
            let numberData = $("<td></td>").text(data[i]["number"]);
            let tripFromData = $("<td></td>").text(data[i]["tripFrom"]);
            let tripToData = $("<td></td>").text(data[i]["tripTo"]);
            let priceData = $("<td></td>").text(data[i]["price"]).attr("name", "price" + i);
            let button = $("<button></button>").attr("onclick", "moduleT.deleteTr(this)").attr("name", i).text("delete");
            $("table").append($("<tr></tr>").attr("id", i).append(numberData, tripToData, tripFromData, priceData, button));
          }

        } 
        else {
          let array = [];     
          for (let i = 0; i <= +$("table tr:last-child").attr("id"); i++){
            let train = {
            "number": $("tr:eq(" + (i + 1) +") td:eq(0)").text(),
            "tripTo": $("tr:eq(" + (i + 1) +") td:eq(1)").text(),
            "tripFrom": $("tr:eq(" + (i + 1) +") td:eq(2)").text(),
            "price": $("tr:eq(" + (i + 1) +") td:eq(3)").text()
          }
          array.push(train);
          } 
          let train = {
            "number": $("#number").val(),
            "tripTo": $("#tripTo").val(),
            "tripFrom": $("#tripFrom").val(),
            "price": $("#price").val()
          };
          array.push(train);
          $("table").empty();

           let number = $("<th></th>").text("Number");
          let tripTo = $("<th></th>").text("To");
          let tripFrom = $("<th></th>").text("From");
          let price = $("<th></th>").text("Price");
          ($("table").attr("id", "table").append($("<tr></tr>").append(number, tripTo,  tripFrom, price)));
         for (let i = 0; i < array.length; i++){           
             let numberData = $("<td></td>").text(data[i]["number"]);
            let tripFromData = $("<td></td>").text(data[i]["from"]);
            let tripToData = $("<td></td>").text(data[i]["to"]);
            let priceData = $("<td></td>").text(data[i]["price"]).attr("name", "price" + i);
            let button = $("<button></button>").attr("onclick", "moduleT.deleteTr(this)").attr("name", i).text("delete");
             
            $("table").append($("<tr></tr>").attr("id", i).append(numberData, tripFromData,  tripToData, priceData, button));
          }
        }
      }
      function averagePrice(){
        let array = [];     
          for (let i = 0; i <= +$("table tr:last-child").attr("id"); i++){
          let train = {
            "number": $("tr:eq(" + (i + 1) +") td:eq(0)").text(),
            "tripTo": $("tr:eq(" + (i + 1) +") td:eq(1)").text(),
            "tripFrom": $("tr:eq(" + (i + 1) +") td:eq(2)").text(),
            "price": $("tr:eq(" + (i + 1) +") td:eq(3)").text()
          }
          array.push(train);
        } 
        if(!array.length){
         $("div").text(` Average price: 0`);
        } else {  
          let num = array.length;
          let sum = 0;
          for (let i = 0; i < num; i++){
            sum += +$('td[name = "price' + i + '"]').text();
          }
          $("div").text(` Average price: ${(sum / num).toFixed(1)}`);
        }       
      }
     
      function deleteTr(obj){
        let array = []; 
        for (let i = 0; i <= +$("table tr:last-child").attr("id"); i++){
          let train = {
            "number": $("tr:eq(" + (i + 1) +") td:eq(0)").text(),
            "tripTo": $("tr:eq(" + (i + 1) +") td:eq(1)").text(),
            "tripFrom": $("tr:eq(" + (i + 1) +") td:eq(2)").text(),
            "price": $("tr:eq(" + (i + 1) +") td:eq(3)").text()
          }
          array.push(train);
        }
        if(array.length == 1) {
          $("table").empty();
          $("table").attr("border", "0");
          return;
        }
        let deleteIndex;
        for (let i = 0; i <= array.length; i++){
          if ("d" + i == obj.name){
            deleteIndex = i;
            break;
          }
        }
        let newArray = [];
        for (let i = 0; i < array.length; i++){
          if (i == deleteIndex) continue;
          newArray.push(array[i]);
        }
        array = newArray;
        add(array);
      }*/