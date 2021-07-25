for(var j=1;j<=50;j++){
    var url = 'https://api-thirukkural.vercel.app/api?num='+j;
    var bg=document.createElement('div');      
      bg.setAttribute('class','cc'); 
      var container=document.createElement('div');      
      container.setAttribute('class','container'); 
      
      
      var h=document.createElement('h1');
      h.innerHTML="THIRUKURAL";
      
      var row=document.createElement('row');
      row.setAttribute('class','row');
     
    console.log(url)
    fetch(url, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((res) => {
       console.log(res);
       
       var col1=document.createElement('div');
          col1.setAttribute('class','col-lg-3 col-md-3 col-sm-3 con');
          var div1=document.createElement('div'); 
          div1.setAttribute('class','center-info text-center');
            var div2=document.createElement('div');
            div2.setAttribute('class','title');       
            var div3=document.createElement('div');
      div3.setAttribute('class','text') ; 
            
    
       var p1=document.createElement('h4');
       p1.setAttribute('class','agar');
       p1.innerHTML=" ' "+res.eng +"' ";
    
       var p2=document.createElement('p');
       p2.setAttribute('class','agar');
       p2.innerHTML="Chapter Group:"+" " +res.chapgrp_eng;
       var h3=document.createElement('h5');
       h3.setAttribute('class','kural');
       h3.innerHTML="Explanation:"+" " +res.eng_exp;
       var p=document.createElement('h3');
       p.setAttribute('class','agar');
       p.innerHTML=res.chap_eng;
    
       div2.append(h3);
      div3.append(p);
      div1.append(div3,p1,p2,div2);
           col1.append(div1);
           row.append(col1); 
          container.append(h,row);
          document.body.append(bg,container);
      });
    } 