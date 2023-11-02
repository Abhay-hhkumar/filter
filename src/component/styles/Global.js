import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{margin:0;padding:0;box-sizing:0;transition:0.7s ;}

.container{display: grid;justify-content:center;;}

${'' /* header */}

header{background:rgb(67, 67, 67);z-index:10;color:white;height:70px;;display:flex;justify-content:space-between;align-items:center;position:fixed;width:100%}
header h2{font-size:30px;margin-left:20px;}
header button{margin-right:20px;display:none;padding:5px 20px;border:none;border-radius:20px;font-size:15px;}

${'' /* main */}
.main{max-width:1550px;height:auto;margin:80px 0 0;display:flex;gap:10px;justify-content:space-between;}

${'' /* footer */}
footer{margin-top:10px;color:rgb(255, 255, 255);font-weight:bold;display:flex;align-items:center;justify-content:center;border-radius:10px;background:rgb(0, 0, 0);height:70px;width:100%}

${'' /* filter */}
.filter{min-height:100vh;width:30vw;background:#f2f2f2;border-radius:10px;padding:20px 10px;;}
.filter h2{margin-left:20px;width:100%}


${'' /* category box */}
.categoryBox{background:#dbdbdb;margin-top:10px;padding:20px;border-radius:10px}
.categoryOptions{display:flex;flex-wrap:wrap;gap:10px;}
.categoryOptions label{background:rgb(235, 235, 235);padding: 5px 15px;border-radius:100px}



${'' /* slider */}
.slider {text-align:center;height: 8px;border-radius:4px; width: 100%;margin-top:20px;background-color: #e4e4e4;}
.slider .thumb {height: 20px;width: 20px;border-radius: 50%;background-color: #ffffff;cursor: grab;margin-top:-7px;box-shadow: 0 0 5px rgba(0, 0, 0, 0.2)}
.priceValue{margin-top:20px;}
.priceValue input{width:100px;margin-top:10px;}
.slider .thumb.active {box-shadow: 0 0 5px rgba(202, 202, 202, 0.5);}

${'' /* product box */}
.productBox{border:1px solid rgb(231, 231, 231);border-radius:10px;width:60vw;position:relative;display:flex;align-items:space-between;flex-direction:column;height:100vh;overflow-y:auto;}
.productCard{width:90%;margin:60px auto 10px;border-radius:10px;background:rgb(246, 246, 246);height:auto;padding:20px 10px;justify-content:center;display:flex;flex-wrap:wrap;gap:10px}
.productCard li{list-style-type:none;width:200px;;height:auto;;padding:10px;background:rgb(223, 223, 223);border-radius:10px}
.productCard li img{max-width:100%;height:200px;object-fit:cover;border-radius:10px}

.productCard li p{font-size:15px;margin:5px;}
.productCard li .title{font-weight:bold;}










${'' /* pagination */}
.pagination{cursor:pointer;margin-bottom:20px;margin-left:auto;margin-right:auto;display:flex;gap:10px;list-style-type:none;;;}
.pagination li{background:rgb(221, 221, 221);padding:7px 30px;border-radius:20px;;}
.pagination li.active{background:green;color:white;}

.rangeBox{ padding: 20px;color:white;margin-top:20px;border-radius:10px; background-color: blue}


${'' /* make responsive */}
@media only screen and (max-width:1000px){
    .pagination{gap:8px;}
    .pagination li{padding:4px 20px;border-radius:20px;;}
    .productCard{width:90%;}
    
}
@media only screen and (max-width:830px){
     header button{display:block;}
     .categoryBox{width:80%;margin:10px auto;}
    .filter h2{margin-top:30px;margin-left:0px;}
    .filter{background:#dbdbdb;position:fixed;left:0;width:100%;right:0;;z-index:2;text-align:center;top:-1000px;}
    .pagination{gap:8px;}
    .pagination li{padding:4px 20px;border-radius:20px;}
    .productCard{width:90%;}
    .productBox{width:90vw;}
    
    .rangeBox{margin:10px auto;width:80%;}
}
@media only screen and (max-width:613px){
    .pagination{gap:4px;}
    .pagination li{padding:2px 10px;border-radius:20px;;}
    .productCard{width:90%;}

.productCard li{list-style-type:none;width:150px;;height:auto;;padding:10px;background:rgb(223, 223, 223);border-radius:10px}
.productCard li img{max-width:100%;height:150px;object-fit:cover;border-radius:10px}

}
@media only screen and (max-width:400px){
    .pagination{gap:4px;}
    .pagination li{padding:2px 8px;border-radius:20px;;font-size:10px;}
    .productCard{width:90%;}
}


${'' /* add the id=menu-open when the menu button is clicked */}
#menu-open{top:70px;}

`
export default GlobalStyles;