var persons = [
    { name: "Scott", age: 20, mobile: "98928329322" },
    { name: "Smith", age: 22, mobile: "23849834" },
    { name: "Allen", age: 25, mobile: "8889283911" }
  ];

  for(let i = 0; i <= persons.length; i++){
    //display persons
    let nameList = persons[i]
    let tableData = "<tr><td>"+nameList.name+"</td><td>"+nameList.age+"</td><td>"+nameList.mobile+"</td></tr>"
    $("#table1").append(tableData)
    

  }