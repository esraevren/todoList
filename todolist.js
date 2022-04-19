

//LİSTEYE YENİ ELEMAN EKLEME
let liDom=document.getElementById("list");
let selectInput=document.getElementById("task");

// ekle butonuna basıldığında newLiAdd fonksiyonu çalışacak
let toastButton=document.getElementById("liveToastBtn");
toastButton.addEventListener("click", newLiAdd);

//newLiAdd fonksiyonu tanımlanır

let newLi=document.createElement("li"); //yeni li elementi oluşturulur
function newLiAdd() {
    if(selectInput.value==""){ 
          
        $(".error").toast("show");

    }else{

        $(".success").toast("show");
    
     
     liDom.appendChild(newLi) //id list olan ul'ye append edilir
     newLi.innerHTML=task.value; // id si task olan input un değeri yeni li elementin içine yazılır
     selectInput.value="";  // eklendikten sonra input değeri sıfırlanır

    }

//LİSTEDEN ELEMAN SİLMEK VE ÇARPI BUTONU OLUŞTURMAK

let selectAll=document.getElementsByTagName("li");  //tüm li elementleri seçilir 

for(let i=0; i<selectAll.length; i++) {
    var span=document.createElement("span"); // çarpı işaretinin konulacağı span oluşturulur
    var text=document.createTextNode("\u00D7"); //çarpi işareti simgesi 
    span.className="close" //span a close class ı eklenir
    span.appendChild(text);//çarpı işareti append edildi
    selectAll[i].append(span); //tüm li elemanlarına span append edildi
    span.onclick=silmeBtn;// onclick ile butona basıldığında silmeBtn fonk eklendi 
    selectAll[i].onclick=check;
}

function silmeBtn() {
    this.parentElement.remove();
}
}
newLiAdd()

function check(){
    this.classList.toggle("checked"); 
  }



