var menu
alert('ok')
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s= ")
.then(response=>response.json())
.then(data=>{
        menu=data;
        console.log(menu);
        
    
    })