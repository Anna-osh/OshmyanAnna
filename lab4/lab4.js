 $.ajax({ 
        url: "trains.json", 
        dataType: "json", 
        method: "GET",    
        data: {},
        success: function(data) {
        if(data.length) {

          let numberT = $("<th></th>").text("Number");
          let tripToT = $("<th></th>").text("To");
          let tripFromT = $("<th></th>").text("From");
          let priceT = $("<th></th>").text("Price");
          $("body").append($("<table></table>").attr("id", "table").append($("<tr></tr>").append(numberT, tripToT, tripFromT, priceT)));

          for (let i = 0; i < data.length; i++){          
            let numberData = $("<td></td>").text(data[i]["number"]);
            let tripToData = $("<td></td>").text(data[i]["tripTo"]);
            let tripFromData = $("<td></td>").text(data[i]["tripFrom"]);
            let priceData = $("<td></td>").text(data[i]["price"]).attr("name", "price" + i);
            let button = $("<button></button>").attr("onclick", "moduleT.deleteTr(this)").attr("name", i).text("delete");
            $("table").append($("<tr></tr>").attr("id", i).append(numberData, tripToData, tripFromData,  priceData, button));
          }
        }
      }
    });
   
    let header =$("<h1></h1>").text("Trains");
    let numberImput = $("<p></p>").text("Number: ").append($("<input>").attr("type", "number").attr("id", "number"));
    let tripToImput = $("<p></p>").text("To: ").append($("<input>").attr("type", "text").attr("id", "tripTo"));
    let tripFromImput = $("<p></p>").text("From: ").append($("<input>").attr("type", "text").attr("id", "tripFrom"));
    let priceImput = $("<p></p>").text("Price: ").append($("<input>").attr("type", "number").attr("id", "price"));
    let buttonAdd = $("<button></button>").text("Add").attr("onclick", "moduleT.printTable()");
    let buttonPrice = $("<button></button>").text("Average price").attr("onclick", "moduleT.averagePrice()");
    let div = $("<div></div>");
    $("body").append(header, numberImput, tripToImput, tripFromImput, priceImput, buttonAdd, buttonPrice, div); 


    let moduleT = (function() {
      function deleteTr(obj){

        let array = []; 
        for (let i = 0; i <= +$("table tr:last-child").attr("id"); i++){
          let index=i+1;
          let train = {
            "number": +$("tr:eq(" + index +") td:eq(0)").text(),
            "tripTo": $("tr:eq(" + index +") td:eq(1)").text(),
            "tripFrom": $("tr:eq(" + index +") td:eq(2)").text(),
            "price": +$("tr:eq(" + index +") td:eq(3)").text()
          }
          array.push(train);
        }
        if(array.length == 1) {
          $("table").empty();
          $("table").attr("border", "0");
          return;
        }

        let elemDel=parseInt(obj.name);
        let newArray = [];
        for (let i = 0; i < array.length; i++){
           if (i == elemDel) continue;
          newArray.push(array[i]);
        }
        array = newArray;
       printTable(array);
      }

      function averagePrice(){

        let array = [];     
        for (let i = 0; i <= +$("table tr:last-child").attr("id"); i++){
          let index=i+1;
          let train = {
            "number": +$("tr:eq(" + index +") td:eq(0)").text(),
            "tripTo": $("tr:eq(" + index +") td:eq(1)").text(),
            "tripFrom": $("tr:eq(" + index +") td:eq(2)").text(),
            "price": +$("tr:eq(" + index +") td:eq(3)").text()
          }
          array.push(train);
        } 
        if(!array.length){
         $("div").text(` Average price cannot be calculated!`);
        } else {  
          let num = array.length;
          let sum = 0;
          for (let i = 0; i < num; i++){
            sum += +$('td[name = "price' + i + '"]').text();
          }
           $("div").text(` Average price equals ${(sum / num).toFixed()}`);
        }
       
      }

      function printTable(array=[]){
        if(array.length) {

          $("table").empty();
          let numberT = $("<th></th>").text("Number");
          let tripToT = $("<th></th>").text("To");
          let tripFromT = $("<th></th>").text("From");
          let priceT = $("<th></th>").text("Price");
          ($("table").attr("id", "table").append($("<tr></tr>").append(numberT, tripToT, tripFromT, priceT)));
          
          for (let i = 0; i < array.length; i++){   

            let numberData = $("<td></td>").text(array[i]["number"]);
            let tripToData = $("<td></td>").text(array[i]["tripTo"]);
            let tripFromData = $("<td></td>").text(array[i]["tripFrom"]);
            let priceData = $("<td></td>").text(array[i]["price"]).attr("name", "price" + i);
            let button = $("<button></button>").attr("onclick", "moduleT.deleteTr(this)").attr("name", i).text("delete");
            $("table").append($("<tr></tr>").attr("id", i).append(numberData, tripToData, tripFromData, priceData, button));
          }
        } 
        else {
          let array = [];     
          for (let i = 0; i <= +$("table tr:last-child").attr("id"); i++){
            let index=i+1;
            let train = {
              "number": +$("tr:eq("+ index +") td:eq(0)").text(),
              "tripTo": $("tr:eq(" + index +") td:eq(1)").text(),
              "tripFrom": $("tr:eq(" + index +") td:eq(2)").text(),
              "price": +$("tr:eq(" + index +") td:eq(3)").text()
            }
          array.push(train);
          } 
          let train = {
            "number": +$("#number").val(),
            "tripTo": $("#tripTo").val(),
            "tripFrom": $("#tripFrom").val(),
            "price": +$("#price").val()
          };
          array.push(train);

          $("table").empty();
          let numberT = $("<th></th>").text("Number");
          let tripToT = $("<th></th>").text("To");
          let tripFromT = $("<th></th>").text("From");
          let priceT = $("<th></th>").text("Price");
          ($("table").attr("id", "table").append($("<tr></tr>").append(numberT, tripToT, tripFromT, priceT)));

          for (let i = 0; i < array.length; i++){           
             let numberData = $("<td></td>").text(array[i]["number"]);
            let tripToData = $("<td></td>").text(array[i]["tripTo"]);
            let tripFromData = $("<td></td>").text(array[i]["tripFrom"]);
            let priceData = $("<td></td>").text(array[i]["price"]).attr("name", "price" + i);
            let button = $("<button></button>").attr("onclick", "moduleT.deleteTr(this)").attr("name", i).text("delete");
            $("table").append($("<tr></tr>").attr("id", i).append(numberData, tripToData, tripFromData, priceData, button));
          }

        }
          
      }
      return {
        deleteTr:  deleteTr,
        averagePrice: averagePrice,
        printTable: printTable
      }
    })();
 
