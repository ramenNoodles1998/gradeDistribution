function parseScores(scoresString) {
    
    var arr = scoresString.split(" ");
    console.log(arr)
    return arr;
}

function buildDistributionArray(scoresArray) {
    
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var f = 0;
    var arr = [];
    if (scoresArray.length == 0) {
        arr.push(0);
        arr.push(0);
        arr.push(0);
        arr.push(0);
        arr.push(0);
        return arr;
    }
    for (var i = 0; i < scoresArray.length; i++) {
        if (scoresArray[i] >= 90) {
            a = a + 1;
        }
        else if (scoresArray[i] <= 89 && scoresArray[i] >= 80) {
            b = b + 1;
        }
        else if (scoresArray[i] <= 79 && scoresArray[i] >= 70) {
            c = c + 1;
        }
        else if (scoresArray[i] <= 69 && scoresArray[i] >= 60) {
            d = d + 1;
        }
        else {
            f = f + 1;
        }
    }
    arr.push(a);
    arr.push(b);
    arr.push(c);
    arr.push(d);
    arr.push(f);
    return arr;
}

function setTableContent(userInput) {
    
    // var c = createElement("div")
    // appendChild(c)
    var arr = parseScores(userInput);
    if (arr <= 0) {
        var table = document.getElementById("distributionTable");
        var row = table.insertRow();
        var cell = row.insertCell(0);
        var Text = document.createTextNode("No graph to display");
        cell.appendChild(Text);
        
        
    }
    else {
        arr = buildDistributionArray(arr);
        
        var table = document.getElementById("distributionTable");
        var row = table.insertRow();
        var row2 = table.insertRow();
        var row3 = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        var div5 = document.createElement("div");
        div1.className = "bar0";
        div2.className = "bar1";
        div3.className = "bar2";
        div4.className = "bar3";
        div5.className = "bar4";
        div1.style.height = (arr[0] * 10) + "px";
        div2.style.height = (arr[1] * 10) + "px";
        div3.style.height = (arr[2] * 10) + "px";
        div4.style.height = (arr[3] * 10) + "px";
        div5.style.height = (arr[4] * 10) + "px";
        cell1.appendChild(div1);
        cell2.appendChild(div2);
        cell3.appendChild(div3);
        cell4.appendChild(div4);
        cell5.appendChild(div5);
        console.log(table);
        var aCell = row2.insertCell(0);
        var bCell = row2.insertCell(1);
        var cCell = row2.insertCell(2);
        var dCell = row2.insertCell(3);
        var fCell = row2.insertCell(4);
        var divA = document.createElement("div");
        var divB = document.createElement("div");
        var divC = document.createElement("div");
        var divD = document.createElement("div");
        var divF = document.createElement("div");
        aCell.appendChild(divA);
        bCell.appendChild(divB);
        cCell.appendChild(divC);
        dCell.appendChild(divD);
        fCell.appendChild(divF);
        var aText = document.createTextNode("A");
        divA.appendChild(aText);
        var bText = document.createTextNode("B");
        divB.appendChild(bText);
        var cText = document.createTextNode("C");
        divC.appendChild(cText);
        var dText = document.createTextNode("D");
        divD.appendChild(dText);
        var fText = document.createTextNode("F");
        divF.appendChild(fText);
        var cellOne = row3.insertCell(0);
        var cellTwo = row3.insertCell(1);
        var cellThree = row3.insertCell(2);
        var cellFour = row3.insertCell(3);
        var cellFive = row3.insertCell(4);
        var oneText = document.createTextNode(arr[0]);
        cellOne.appendChild(oneText);
        var twoText = document.createTextNode(arr[1]);
        cellTwo.appendChild(twoText);
        var threeText = document.createTextNode(arr[2]);
        cellThree.appendChild(threeText);
        var fourText = document.createTextNode(arr[3]);
        cellFour.appendChild(fourText);
        var fiveText = document.createTextNode(arr[4]);
        cellFive.appendChild(fiveText);
        
    }


}

function bodyLoaded() {
    
    setTableContent("100 98 33 44 56 32 78 65 89");
}